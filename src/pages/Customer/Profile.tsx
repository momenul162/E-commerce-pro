import { useState } from "react";
import { users } from "@/assets/data";
import { toast } from "sonner";
import DashboardLayout from "@/layout/DashboardLayout";

const CustomerProfile = () => {
  // For demo purposes, assume we're logged in as the first user
  const user = users[0];

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: "555-123-4567",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zipCode: "12345",
    country: "USA",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData({
      ...passwordData,
      [name]: value,
    });
  };

  const handleProfileUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your profile information has been updated successfully");
  };

  const handlePasswordUpdate = (e: React.FormEvent) => {
    e.preventDefault();

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.warning("New password and confirm password do not match");
      return;
    }

    toast.success("Your password has been updated successfully");

    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <DashboardLayout role="customer">
      <div className="space-y-10">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Your Profile</h1>
          <p className="text-muted-foreground">Manage your account settings and preferences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6">
          {/* Profile Summary */}
          <div className="bg-white rounded-xl border border-border shadow-sm p-6 text-center">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-semibold mb-1">{user.name}</h2>
            <p className="text-muted-foreground mb-4">{user.email}</p>
            <div className="flex justify-center">
              <span className="px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 capitalize">
                {user.role}
              </span>
            </div>
            <hr className="my-4" />
            <div className="text-sm text-muted-foreground">
              <p>Member since January 2023</p>
              <p>Last login: Today</p>
            </div>
          </div>

          {/* Profile Details Form */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl border border-border shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
              <form onSubmit={handleProfileUpdate}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <h3 className="text-md font-medium mb-2 mt-6">Shipping Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <label className="text-sm text-muted-foreground block mb-1" htmlFor="address">
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1" htmlFor="city">
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1" htmlFor="state">
                      State/Province
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1" htmlFor="zipCode">
                      ZIP / Postal Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1" htmlFor="country">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Update Profile
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-white rounded-xl border border-border shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Change Password</h2>
              <form onSubmit={handlePasswordUpdate}>
                <div className="space-y-4">
                  <div>
                    <label
                      className="text-sm text-muted-foreground block mb-1"
                      htmlFor="currentPassword"
                    >
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      className="w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label
                      className="text-sm text-muted-foreground block mb-1"
                      htmlFor="newPassword"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      className="w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label
                      className="text-sm text-muted-foreground block mb-1"
                      htmlFor="confirmPassword"
                    >
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      className="w-full h-10 rounded-md border border-input bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Change Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomerProfile;
