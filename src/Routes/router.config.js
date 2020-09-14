import { Home, About, Users, Other } from '../pages';

const routes = [
    {
        path: "/home",
        authName: "首页",
        component: Home,
    },
    {
        path: "/other",
        authName: "首页",
        component: Other,
        routes: [
            {
                path: "/other/about",
                authName: "关于",
                component: About,
            },
            {
                path: "/other/users",
                authName: "用户",
                component: Users,
            }
        ]
    },
];

export default routes;