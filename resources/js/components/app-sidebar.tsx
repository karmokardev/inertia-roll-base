import { Link, usePage } from '@inertiajs/react';
import { LayoutGrid, Users, PenSquare, BookOpen, GraduationCap, Heart, CheckCircle } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

// Role -> allowed nav items mapping
const navItemsByRole: Record<string, NavItem[]> = {
    admin: [
        { title: 'Dashboard', href: dashboard(), icon: LayoutGrid },
        { title: 'Membership Approvals', href: '/admin/memberships', icon: CheckCircle },
        { title: 'Users', href: '/users', icon: Users },
        { title: 'Posts', href: '/posts', icon: PenSquare },
    ],
    member: [
        { title: 'Dashboard', href: dashboard(), icon: LayoutGrid },
    ],
    instructor: [
        { title: 'Dashboard', href: dashboard(), icon: LayoutGrid },
        { title: 'Courses', href: '/courses', icon: BookOpen },
        { title: 'Students', href: '/students', icon: GraduationCap },
    ],
    volunteer: [
        { title: 'Dashboard', href: dashboard(), icon: LayoutGrid },
        { title: 'Activities', href: '/activities', icon: Heart },
    ],
    student: [
        { title: 'Dashboard', href: dashboard(), icon: LayoutGrid },
        { title: 'Courses', href: '/courses', icon: BookOpen },
    ],
};

const defaultNavItems: NavItem[] = [
    { title: 'Dashboard', href: dashboard(), icon: LayoutGrid },
];

export function AppSidebar() {
    const { auth } = usePage<{ auth: { user: { roles: Array<{ name: string }> } } }>().props;


    // First role of the user, fallback to 'user'
    const role = auth?.user?.roles?.[0]?.name ?? 'user';

    const navItems = navItemsByRole[role] ?? defaultNavItems;

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href='/' prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={navItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
