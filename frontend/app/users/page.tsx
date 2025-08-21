'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { mockUsers } from '@/data/mockData';
import { Plus, Search, Users, Shield, UserCheck, UserX } from 'lucide-react';

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === 'all' || user.role === filterRole;
    const matchesStatus = filterStatus === 'all' || user.is_active === (filterStatus === 'active');
    
    return matchesSearch && matchesRole && matchesStatus;
  });

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'danger';
      case 'operator': return 'warning';
      case 'viewer': return 'info';
      case 'citizen': return 'default';
      default: return 'default';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'admin': return <Shield className="w-4 h-4" />;
      case 'operator': return <Users className="w-4 h-4" />;
      case 'viewer': return <UserCheck className="w-4 h-4" />;
      case 'citizen': return <UserX className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
            <p className="text-gray-600 mt-2">Manage system users and permissions</p>
          </div>
          <Button variant="primary" icon={<Plus className="w-4 h-4" />}>
            Add User
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Roles</option>
              <option value="admin">Admin</option>
              <option value="operator">Operator</option>
              <option value="viewer">Viewer</option>
              <option value="citizen">Citizen</option>
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">{mockUsers.length}</p>
            </div>
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Users</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockUsers.filter(u => u.is_active).length}
              </p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <UserCheck className="w-4 h-4 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Admins</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockUsers.filter(u => u.role === 'admin').length}
              </p>
            </div>
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Operators</p>
              <p className="text-2xl font-bold text-gray-900">
                {mockUsers.filter(u => u.role === 'operator').length}
              </p>
            </div>
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">System Users</h3>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Login
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                            <span className="text-sm font-medium text-gray-700">
                              {user.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {getRoleIcon(user.role)}
                        <Badge variant={getRoleColor(user.role) as any} size="sm" className="ml-2">
                          {user.role}
                        </Badge>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant={user.is_active ? 'success' : 'default'} size="sm">
                        {user.is_active ? 'Active' : 'Inactive'}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {user.last_login 
                        ? new Date(user.last_login).toLocaleDateString()
                        : 'Never'
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          {user.is_active ? 'Deactivate' : 'Activate'}
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredUsers.length === 0 && (
            <div className="text-center py-8">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No users found</h3>
              <p className="text-gray-600">
                {searchTerm || filterRole !== 'all' || filterStatus !== 'all'
                  ? 'Try adjusting your search or filters'
                  : 'No users have been added yet'}
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Development Status */}
      <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">Development Status</h3>
        <p className="text-yellow-700">
          User management system is being implemented with the following features:
        </p>
        <ul className="list-disc list-inside mt-2 text-yellow-700 text-sm space-y-1">
          <li>• Role-based access control (RBAC) with granular permissions</li>
          <li>• User authentication and session management</li>
          <li>• Multi-tenant user isolation and management</li>
          <li>• Audit logging for user actions and system access</li>
          <li>• SSO integration with SAML/OIDC providers</li>
          <li>• User profile management and preferences</li>
        </ul>
      </div>
    </div>
  );
}
