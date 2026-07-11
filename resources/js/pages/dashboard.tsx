import { Head } from '@inertiajs/react';
import { User } from '@/types';

interface Props {
    user: User;
    role: 'admin' | 'member' | 'user';
    users?: Array<{
        id: number
        name: string
        email: string
        roles: Array<{ name: string }>
    }>;
    stats?: {
        admin: number
        member: number
        volunteer: number
        instructor: number
        student: number
    };
}

export default function Dashboard({ user, role, users, stats }: Props) {
    return (
        <>
            <Head title="Dashboard" />
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">
                    {role === 'admin' ? 'Admin Dashboard' : role === 'member' ? 'Member Dashboard' : 'Dashboard'}
                </h1>

                {role === 'admin' && stats && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                            <div className="bg-card p-4 rounded-lg shadow border border-border">
                                <h3 className="text-lg font-semibold text-foreground">Admin</h3>
                                <p className="text-3xl font-bold text-blue-600">{stats.admin}</p>
                            </div>
                            <div className="bg-card p-4 rounded-lg shadow border border-border">
                                <h3 className="text-lg font-semibold text-foreground">Member</h3>
                                <p className="text-3xl font-bold text-green-600">{stats.member}</p>
                            </div>
                            <div className="bg-card p-4 rounded-lg shadow border border-border">
                                <h3 className="text-lg font-semibold text-foreground">Volunteer</h3>
                                <p className="text-3xl font-bold text-purple-600">{stats.volunteer}</p>
                            </div>
                            <div className="bg-card p-4 rounded-lg shadow border border-border">
                                <h3 className="text-lg font-semibold text-foreground">Instructor</h3>
                                <p className="text-3xl font-bold text-orange-600">{stats.instructor}</p>
                            </div>
                            <div className="bg-card p-4 rounded-lg shadow border border-border">
                                <h3 className="text-lg font-semibold text-foreground">Student</h3>
                                <p className="text-3xl font-bold text-red-600">{stats.student}</p>
                            </div>
                        </div>
                    </>
                )}

                {role === 'member' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-card border border-border rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-foreground mb-2">Profile</h3>
                            <p className="text-muted-foreground">Manage your profile information</p>
                        </div>
                        <div className="bg-card border border-border rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-foreground mb-2">Posts</h3>
                            <p className="text-muted-foreground">View and manage posts</p>
                        </div>
                        <div className="bg-card border border-border rounded-xl p-6">
                            <h3 className="text-lg font-semibold text-foreground mb-2">Settings</h3>
                            <p className="text-muted-foreground">Account settings</p>
                        </div>
                    </div>
                )}

                {role === 'user' && (
                    <div className="bg-card border border-border rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">Welcome</h3>
                        <p className="text-muted-foreground">Your account is being set up. Please contact an administrator.</p>
                    </div>
                )}
            </div>
        </>
    );
}
