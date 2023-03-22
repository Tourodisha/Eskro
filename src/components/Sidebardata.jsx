import React from "react";
import {HomeOutlined,KeyboardArrowDownOutlined,CurrencyExchange,TurnedIn, AccountBalance,KeyboardArrowLeftOutlined,Dashboard} from "@mui/icons-material"
export const Sidebardata=[
    {
        title:"Dashboard",
        path:"/dashboard",
        icon:<Dashboard />
    },
    {
        title:"Plans",
        path:"/plans",
        icon:<CurrencyExchange />
    },
    {
        title:"Product",
        path:"/product",
        icon:<TurnedIn />
    },
    {
        title:"Revenue",
        path:"/revenue",
        icon:<CurrencyExchange />
    },
    {
        title:"Payouts",
        icon:<AccountBalance />,
        iconClosed:<KeyboardArrowLeftOutlined />,
        iconopened:<KeyboardArrowDownOutlined />,
        subnav:[
            {
                title:"Payouts1",
                path:"/payouts/payouts1",
                icon:<HomeOutlined />
            },
            // {
            //     title:"Payouts2",
            //     path:"/payouts/payouts2",
            //     icon:<HomeOutlined />
            // }
        ]

    }
]