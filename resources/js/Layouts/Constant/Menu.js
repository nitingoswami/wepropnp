const Menu =  {
    "admin": [
        {
            title: 'Dashboard',
            route: "admin.dashboard",
            active: ["admin.dashboard"],
        },
        {
            title: 'Users',
            route: "admin.user.list",
            active: [
                "admin.user.list",
                "admin.user.create",
                "admin.user.edit",
                "admin.user.detail",
                "admin.user.history",
            ],
        },
        {
            title: 'Project',
            route: "admin.project.list",
            active: [
                "admin.project.list",
                "admin.project.create",
                "admin.project.detail",
                "admin.project.edit",
                "admin.project.task.create",
                "admin.project.task.list",
                "admin.project.task.edit",
                "admin.project.task.detail",
            ],
        },

    ],
    "hr manager":[
        {
            title: 'Dashboard',
            route: "hrManager.dashboard",
            active: ["hrManager.dashboard"],
        },
        {
            title: 'Users',
            route: "hrManager.user.list",
            active: [
                "hrManager.user.list",
                "hrManager.user.create",
                "hrManager.user.edit",
                "hrManager.user.detail",
                "hrManager.user.history",
            ],
        },
        // {
        //     title: 'Project',
        //     route: "hrManager.project.list",
        //     active: [
        //         "hrManager.project.list",
        //         "hrManager.project.task.list",
        //     ]
        // },

    ],
    "project manager":[
        {
            title: 'Dashboard',
            route: "projectManager.dashboard",
            active: ["projectManager.dashboard"],
        },

        {
            title: 'Project',
            route: "projectManager.project.list",
            active: [
                "projectManager.project.list",
                // "projectManager.project.create",
                // "projectManager.project.edit",
                // "projectManager.project.detail",
                // "projectManager.project.history",
            ],
        },
    ],
    "junior developer": [

    ],
    "junior developer": [

    ]
};

export default Menu;
