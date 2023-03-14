import React from "react";
import {HomeOutlined,KeyboardArrowDownOutlined,SettingsOutlined, KeyboardArrowLeftOutlined} from "@mui/icons-material"
export const Sidebardata=[
    {
        title:"Dashboard",
        path:"/dashboard",
        icon:<SettingsOutlined />,

    },
    {
        title:"Exchange",
        path:"/exchange",
        icon:<SettingsOutlined />

    },
    {
        title:"Direction",
        path:"/direction",
        icon:<SettingsOutlined />

    },
    {
        title:"Payouts",
        path:"/payouts",
        icon:<SettingsOutlined />,
        iconClosed:<KeyboardArrowLeftOutlined />,
        iconopened:<KeyboardArrowDownOutlined />,
        subnav:[
            {
                title:"Payouts1",
                path:"/payouts/payouts1",
                icon:<HomeOutlined />
            },
            {
                title:"Payouts2",
                path:"/payouts/payouts2",
                icon:<HomeOutlined />
            }
        ]

    },
    {
        title:"Newjsdn",
        path:"/Newjsdn",
        icon:<SettingsOutlined />,
        iconClosed:<KeyboardArrowLeftOutlined />,
        iconopened:<KeyboardArrowDownOutlined />,
        subnav:[
            {
                title:"Newjsdn",
                path:"/Newjsdn/Newjsdn1",
                icon:<HomeOutlined />
            },
            {
                title:"Newjsdn",
                path:"/Newjsdn/Newjsdn2",
                icon:<HomeOutlined />
            }
        ]

    },
    {
        title:"bsduj",
        path:"/bsduj",
        icon:<SettingsOutlined />,
        iconClosed:<KeyboardArrowLeftOutlined />,
        iconopened:<KeyboardArrowDownOutlined />,
        subnav:[
            {
                title:"bsduj",
                path:"/bsduj/bsduj1",
                icon:<HomeOutlined />
            },
            {
                title:"bsduj",
                path:"/bsduj/bsduj2",
                icon:<HomeOutlined />
            }
        ]

    },
]