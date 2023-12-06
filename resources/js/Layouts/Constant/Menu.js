const Menu =  {
    "admin": [
        {
            title: 'Dashboard',
            route: "dashboard",
            active: ["dashboard"],
        },
        {
            title: 'Users',
            route: "user.list",
            active: [
                "user.list",
                "user.create",
                "user.edit"
            ],
        },
        {
            title: 'Project',
            route: "project.list",
            active: [
                "project.list",
                "project.create",
                "project.detail",
                "project.edit",
                "task.create",
                "task.list",
                "task.edit",
                "task.detail",
            ],
        },

    ],
    "hr manager":[

    ],
    "project manager":[

    ],
    "junior developer": [

    ],
    "junior developer": [

    ]
};

export default Menu;
