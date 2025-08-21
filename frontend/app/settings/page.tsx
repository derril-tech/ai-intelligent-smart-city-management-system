'use client';

import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Settings, Shield, Bell, Globe, Database, Key, Users, MapPin } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">System Settings</h1>
            <p className="text-gray-600 mt-2">Configure system preferences and integrations</p>
          </div>
        </div>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">General Settings</h3>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                System Name
              </label>
              <input
                type="text"
                defaultValue="CivitasIQ"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Zone
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="UTC">UTC</option>
                <option value="America/New_York">Eastern Time</option>
                <option value="America/Chicago">Central Time</option>
                <option value="America/Denver">Mountain Time</option>
                <option value="America/Los_Angeles">Pacific Time</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
            <Button variant="primary" className="w-full">
              Save General Settings
            </Button>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Security Settings</h3>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Session Timeout (minutes)
              </label>
              <input
                type="number"
                defaultValue="30"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password Policy
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="standard">Standard (8+ characters)</option>
                <option value="strong">Strong (12+ characters, special chars)</option>
                <option value="enterprise">Enterprise (16+ characters, complexity)</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="mfa"
                defaultChecked
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="mfa" className="ml-2 block text-sm text-gray-700">
                Require Multi-Factor Authentication
              </label>
            </div>
            <Button variant="primary" className="w-full">
              Save Security Settings
            </Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Notification Settings</h3>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="email_notifications"
                defaultChecked
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="email_notifications" className="ml-2 block text-sm text-gray-700">
                Email Notifications
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="sms_notifications"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="sms_notifications" className="ml-2 block text-sm text-gray-700">
                SMS Notifications
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="push_notifications"
                defaultChecked
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="push_notifications" className="ml-2 block text-sm text-gray-700">
                Push Notifications
              </label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Critical Alert Email
              </label>
              <input
                type="email"
                placeholder="alerts@city.gov"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <Button variant="primary" className="w-full">
              Save Notification Settings
            </Button>
          </CardContent>
        </Card>

        {/* Integration Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Integrations</h3>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mapbox API Key
              </label>
              <input
                type="password"
                placeholder="pk.eyJ1Ijoi..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                OpenAI API Key
              </label>
              <input
                type="password"
                placeholder="sk-..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Webhook URL
              </label>
              <input
                type="url"
                placeholder="https://hooks.slack.com/..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <Button variant="primary" className="w-full">
              Save Integration Settings
            </Button>
          </CardContent>
        </Card>

        {/* Database Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Database className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">Database Settings</h3>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Data Retention (days)
              </label>
              <input
                type="number"
                defaultValue="365"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Backup Frequency
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="auto_backup"
                defaultChecked
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="auto_backup" className="ml-2 block text-sm text-gray-700">
                Enable Automatic Backups
              </label>
            </div>
            <Button variant="primary" className="w-full">
              Save Database Settings
            </Button>
          </CardContent>
        </Card>

        {/* API Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center">
              <Key className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">API Settings</h3>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Rate Limit (requests/minute)
              </label>
              <input
                type="number"
                defaultValue="1000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                API Version
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                <option value="v1">v1 (Current)</option>
                <option value="v2">v2 (Beta)</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="api_docs"
                defaultChecked
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="api_docs" className="ml-2 block text-sm text-gray-700">
                Enable API Documentation
              </label>
            </div>
            <Button variant="primary" className="w-full">
              Save API Settings
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Development Status */}
      <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-800 mb-2">Development Status</h3>
        <p className="text-yellow-700">
          Settings management system is being implemented with the following features:
        </p>
        <ul className="list-disc list-inside mt-2 text-yellow-700 text-sm space-y-1">
          <li>• System configuration and preferences management</li>
          <li>• Security settings and authentication policies</li>
          <li>• Notification preferences and alert configurations</li>
          <li>• Third-party integration settings and API keys</li>
          <li>• Database configuration and backup settings</li>
          <li>• Multi-tenant configuration management</li>
        </ul>
      </div>
    </div>
  );
}
