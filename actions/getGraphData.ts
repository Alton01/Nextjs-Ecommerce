import prisma from '@/libs/prismadb';
import moment from 'moment';

export default async function getGraphData() {
    try {
       
        // GET START AND  END DATES FOR DATA RANGE (7 DAYS AGO TO TODAY)
        const startDate = moment().subtract(6, "days").startOf("day");
        const endDate = moment().endOf("day");

        // QUERY THE DATABASE TO GET ORDER DATA GROUPED BY CREATE DATE

        const result = await prisma.order.groupBy({
            by: ["createdDate"],
            where: {
                createdDate: {
                    gte: startDate.toISOString(),
                    lte: endDate.toISOString(),
                },
                status: "complete",
            },
            _sum: {
                amount: true,
            }
        })

        // Initialize and object to aggregate the data by day

        const aggregatedData: {
            [day: string] : {day: string; date: string; totalAmount: number };
        } = {};

        //CREATE A CLONE OF THE STARTDATE TO ITERATE OVER EACH DAY
        const currentDate = startDate.clone();

        //ITERATE OVER EACH DAY IN THEDATE RANGE
        while (currentDate <= endDate) {
            //FORMAT THE DAY AS ASTRING, (eg FRIDAY)
            const day = currentDate.format('dddd');
            console.log("day>>>", day, currentDate);

            //INITIALIZE THEAGGREGATED DATA FOR THE DAY WITH THE DAY, DATE AND TOTALAMOUNT
            aggregatedData[day] = {
                day,
                date: currentDate.format("YYYY-MM-DD"),
                totalAmount: 0,
            };

            //MOVE TO THE NEXT DAY
            currentDate.add(1, "day");
        }

        //CALCULATE THE TOTAL AMOUNT FOR EACH DAY BY SUMMING UP THE ORDER AMOUNTS
        result.forEach((entry) => {
            const day = moment(entry.createdDate).format("dddd");
            const amount = entry._sum.amount || 0;
            aggregatedData[day].totalAmount += amount;
        });

        //CONVERT THE AGGREGATED DATA OBJECT TO AN ARRAY AND SORT IT BY DATE
        const formattedData = Object.values(aggregatedData).sort((a, b) => moment(a.date).diff(b.date))

        //Return the formatted date
        return formattedData;

    } catch (error: any) {
        throw new Error(error)
    }
}