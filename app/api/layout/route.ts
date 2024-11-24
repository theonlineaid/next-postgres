import { NextResponse } from "next/server";
export async function GET() {
    // Sample JSON response
    const response = {
        "success": true,
        "message": "Successfully fetched Themes layout",
        "data": {
            "layoutName": "custom",
            "pages": [
                {
                    "name": "dashboard",
                    "id": "303",
                    "layout": {
                        "lg": [
                            {
                                "w": 6,
                                "h": 29,
                                "x": 6,
                                "y": 103,
                                "i": "positionb7f3ed67-1921-4d3f-990a-1de28abdb409_INDIVIDUAL",
                                "component_type": "position",
                                "id": "4059",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 6,
                                "h": 39,
                                "x": 0,
                                "y": 0,
                                "i": "tradingc06ff3a9-5ca3-4ae5-a1cd-599587d479e1_GROUP",
                                "component_type": "marketData",
                                "id": "4069",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 6,
                                "h": 29,
                                "x": 0,
                                "y": 132,
                                "i": "news5f37626e-2de2-48c7-ba3b-b96da35bd23e_INDIVIDUAL",
                                "component_type": "news",
                                "id": "4092",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 6,
                                "h": 29,
                                "x": 0,
                                "y": 161,
                                "i": "purchase2c21b99b-b909-48b8-9131-6742affd3c7d_INDIVIDUAL",
                                "component_type": "purchase",
                                "id": "4093",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 6,
                                "h": 29,
                                "x": 0,
                                "y": 103,
                                "i": "orderSummery8415b8c0-a077-42aa-b03f-7ffb78764d71_INDIVIDUAL",
                                "component_type": "orderSummery",
                                "id": "4055",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 28,
                                "x": 0,
                                "y": 75,
                                "i": "blotterc969ea6e-7852-4c3c-a521-a27aea90522f_INDIVIDUAL",
                                "component_type": "blotter",
                                "id": "4056",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 36,
                                "x": 0,
                                "y": 39,
                                "i": "blotter050e822a-ecc2-4ff7-80cb-d3998a23e680_INDIVIDUAL",
                                "component_type": "blotter",
                                "id": "3747",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 6,
                                "h": 38,
                                "x": 6,
                                "y": 0,
                                "i": "buySell47aef503-e1df-4747-8d93-e889122bf470_MARKET",
                                "component_type": "buySell",
                                "id": "3748",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            }
                        ],
                        "md": [
                            {
                                "w": 12,
                                "h": 29,
                                "x": 0,
                                "y": 200,
                                "i": "positionb7f3ed67-1921-4d3f-990a-1de28abdb409_INDIVIDUAL",
                                "component_type": "position",
                                "id": "4059",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 47,
                                "x": 0,
                                "y": 0,
                                "i": "tradingc06ff3a9-5ca3-4ae5-a1cd-599587d479e1_GROUP",
                                "component_type": "marketData",
                                "id": "4069",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 29,
                                "x": 0,
                                "y": 229,
                                "i": "news5f37626e-2de2-48c7-ba3b-b96da35bd23e_INDIVIDUAL",
                                "component_type": "news",
                                "id": "4092",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 29,
                                "x": 0,
                                "y": 287,
                                "i": "purchase2c21b99b-b909-48b8-9131-6742affd3c7d_INDIVIDUAL",
                                "component_type": "purchase",
                                "id": "4093",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 24,
                                "x": 0,
                                "y": 176,
                                "i": "orderSummery8415b8c0-a077-42aa-b03f-7ffb78764d71_INDIVIDUAL",
                                "component_type": "orderSummery",
                                "id": "4055",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 38,
                                "x": 0,
                                "y": 80,
                                "i": "blotterc969ea6e-7852-4c3c-a521-a27aea90522f_INDIVIDUAL",
                                "component_type": "blotter",
                                "id": "4056",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 38,
                                "x": 0,
                                "y": 80,
                                "i": "blotter050e822a-ecc2-4ff7-80cb-d3998a23e680_INDIVIDUAL",
                                "component_type": "blotter",
                                "id": "3747",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 33,
                                "x": 0,
                                "y": 47,
                                "i": "buySell47aef503-e1df-4747-8d93-e889122bf470_MARKET",
                                "component_type": "buySell",
                                "id": "3748",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            }
                        ],
                        "sm": [
                            {
                                "w": 12,
                                "h": 29,
                                "x": 0,
                                "y": 200,
                                "i": "positionb7f3ed67-1921-4d3f-990a-1de28abdb409_INDIVIDUAL",
                                "component_type": "position",
                                "id": "4059",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 47,
                                "x": 0,
                                "y": 0,
                                "i": "tradingc06ff3a9-5ca3-4ae5-a1cd-599587d479e1_GROUP",
                                "component_type": "marketData",
                                "id": "4069",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 29,
                                "x": 0,
                                "y": 229,
                                "i": "news5f37626e-2de2-48c7-ba3b-b96da35bd23e_INDIVIDUAL",
                                "component_type": "news",
                                "id": "4092",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 29,
                                "x": 0,
                                "y": 287,
                                "i": "purchase2c21b99b-b909-48b8-9131-6742affd3c7d_INDIVIDUAL",
                                "component_type": "purchase",
                                "id": "4093",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 24,
                                "x": 0,
                                "y": 176,
                                "i": "orderSummery8415b8c0-a077-42aa-b03f-7ffb78764d71_INDIVIDUAL",
                                "component_type": "orderSummery",
                                "id": "4055",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 38,
                                "x": 0,
                                "y": 80,
                                "i": "blotterc969ea6e-7852-4c3c-a521-a27aea90522f_INDIVIDUAL",
                                "component_type": "blotter",
                                "id": "4056",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 38,
                                "x": 0,
                                "y": 80,
                                "i": "blotter050e822a-ecc2-4ff7-80cb-d3998a23e680_INDIVIDUAL",
                                "component_type": "blotter",
                                "id": "3747",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 33,
                                "x": 0,
                                "y": 47,
                                "i": "buySell47aef503-e1df-4747-8d93-e889122bf470_MARKET",
                                "component_type": "buySell",
                                "id": "3748",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            }
                        ],
                        "xs": [
                            {
                                "w": 12,
                                "h": 29,
                                "x": 0,
                                "y": 200,
                                "i": "positionb7f3ed67-1921-4d3f-990a-1de28abdb409_INDIVIDUAL",
                                "component_type": "position",
                                "id": "4059",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 47,
                                "x": 0,
                                "y": 0,
                                "i": "tradingc06ff3a9-5ca3-4ae5-a1cd-599587d479e1_GROUP",
                                "component_type": "marketData",
                                "id": "4069",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 29,
                                "x": 0,
                                "y": 229,
                                "i": "news5f37626e-2de2-48c7-ba3b-b96da35bd23e_INDIVIDUAL",
                                "component_type": "news",
                                "id": "4092",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 29,
                                "x": 0,
                                "y": 287,
                                "i": "purchase2c21b99b-b909-48b8-9131-6742affd3c7d_INDIVIDUAL",
                                "component_type": "purchase",
                                "id": "4093",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 24,
                                "x": 0,
                                "y": 176,
                                "i": "orderSummery8415b8c0-a077-42aa-b03f-7ffb78764d71_INDIVIDUAL",
                                "component_type": "orderSummery",
                                "id": "4055",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 38,
                                "x": 0,
                                "y": 80,
                                "i": "blotterc969ea6e-7852-4c3c-a521-a27aea90522f_INDIVIDUAL",
                                "component_type": "blotter",
                                "id": "4056",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 38,
                                "x": 0,
                                "y": 80,
                                "i": "blotter050e822a-ecc2-4ff7-80cb-d3998a23e680_INDIVIDUAL",
                                "component_type": "blotter",
                                "id": "3747",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 33,
                                "x": 0,
                                "y": 47,
                                "i": "buySell47aef503-e1df-4747-8d93-e889122bf470_MARKET",
                                "component_type": "buySell",
                                "id": "3748",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            }
                        ],
                        "xxs": [
                            {
                                "w": 12,
                                "h": 29,
                                "x": 0,
                                "y": 200,
                                "i": "positionb7f3ed67-1921-4d3f-990a-1de28abdb409_INDIVIDUAL",
                                "component_type": "position",
                                "id": "4059",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 47,
                                "x": 0,
                                "y": 0,
                                "i": "tradingc06ff3a9-5ca3-4ae5-a1cd-599587d479e1_GROUP",
                                "component_type": "marketData",
                                "id": "4069",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 29,
                                "x": 0,
                                "y": 229,
                                "i": "news5f37626e-2de2-48c7-ba3b-b96da35bd23e_INDIVIDUAL",
                                "component_type": "news",
                                "id": "4092",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 29,
                                "x": 0,
                                "y": 287,
                                "i": "purchase2c21b99b-b909-48b8-9131-6742affd3c7d_INDIVIDUAL",
                                "component_type": "purchase",
                                "id": "4093",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 24,
                                "x": 0,
                                "y": 176,
                                "i": "orderSummery8415b8c0-a077-42aa-b03f-7ffb78764d71_INDIVIDUAL",
                                "component_type": "orderSummery",
                                "id": "4055",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 38,
                                "x": 0,
                                "y": 80,
                                "i": "blotterc969ea6e-7852-4c3c-a521-a27aea90522f_INDIVIDUAL",
                                "component_type": "blotter",
                                "id": "4056",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 38,
                                "x": 0,
                                "y": 80,
                                "i": "blotter050e822a-ecc2-4ff7-80cb-d3998a23e680_INDIVIDUAL",
                                "component_type": "blotter",
                                "id": "3747",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            },
                            {
                                "w": 12,
                                "h": 33,
                                "x": 0,
                                "y": 47,
                                "i": "buySell47aef503-e1df-4747-8d93-e889122bf470_MARKET",
                                "component_type": "buySell",
                                "id": "3748",
                                "moved": false,
                                "static": true,
                                "resizeHandles": [
                                    "s",
                                    "w",
                                    "e",
                                    "n",
                                    "sw",
                                    "nw",
                                    "se",
                                    "ne"
                                ]
                            }
                        ]
                    },
                    "minimize": false
                }
            ]
        }
    }
    // Use NextResponse to send the response
    return NextResponse.json(response);
}