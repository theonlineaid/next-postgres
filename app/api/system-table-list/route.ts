import { NextResponse } from "next/server";

export async function GET() {
    // Sample JSON response
    const response = {
        success: true,
        message: "Successfully fetched System Table List",
        data: [
            {
                id: 1,
                name: "Trading List",
                code: "001",
                view_type: "GROUP",
                table_type: "trading",
                i: "trading_GROUP",
                component_type: "marketData",
            },
            {
                id: 2,
                name: "Market Depth",
                code: "002",
                view_type: "MARKET",
                table_type: "buySell",
                i: "buySell_MARKET",
                component_type: "buySell",
            },
            {
                id: 3,
                name: "Blotter",
                code: "003",
                view_type: "INDIVIDUAL",
                table_type: "blotter",
                i: "blotter_INDIVIDUAL",
                component_type: "blotter",
            },
            {
                id: 4,
                name: "Mover Gainers",
                code: "004",
                view_type: "INDIVIDUAL",
                table_type: "moversGainers",
                i: "moversGainers_INDIVIDUAL",
                component_type: "moversGainers",
            },
            {
                id: 5,
                name: "Execution",
                code: "005",
                view_type: "INDIVIDUAL",
                table_type: "execution",
                i: "execution_INDIVIDUAL",
                component_type: "execution",
            },
            {
                id: 6,
                name: "Order Summery",
                code: "006",
                view_type: "INDIVIDUAL",
                table_type: "orderSummery",
                i: "orderSummery_INDIVIDUAL",
                component_type: "orderSummery",
            },
            {
                id: 7,
                name: "Position",
                code: "007",
                view_type: "INDIVIDUAL",
                table_type: "position",
                i: "position_INDIVIDUAL",
                component_type: "position",
            },
            {
                id: 8,
                name: "News",
                code: "008",
                view_type: "INDIVIDUAL",
                table_type: "news",
                i: "news_INDIVIDUAL",
                component_type: "news",
            },
            {
                id: 9,
                name: "Reports",
                code: "009",
                view_type: "INDIVIDUAL",
                table_type: "report",
                i: "report_INDIVIDUAL",
                component_type: "report",
            },
            {
                id: 10,
                name: "Purchase Power",
                code: "0010",
                view_type: "INDIVIDUAL",
                table_type: "purchase",
                i: "purchase_INDIVIDUAL",
                component_type: "purchase",
            },
        ],
    };

    // Use NextResponse to send the response
    return NextResponse.json(response);
}
