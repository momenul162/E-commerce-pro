const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div></div>
        <div className="text-right">
          <p>Welcome shohid</p>
          <i className="fas fa-user-circle text-2xl"></i>
          <i className="fas fa-power-off text-2xl ml-2"></i>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {/* Left Column */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-desktop text-2xl"></i>
            <p>Counter</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-exchange-alt text-2xl"></i>
            <p>Shop In Out</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-user-shield text-2xl"></i>
            <p>User Permission</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-users-cog text-2xl"></i>
            <p>User Management</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-calendar-check text-2xl"></i>
            <p>Emp. Attendance</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-cogs text-2xl"></i>
            <p>Settings</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-users text-2xl"></i>
            <p>Group Setup</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-tags text-2xl"></i>
            <p>Brand Setup</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-box-open text-2xl"></i>
            <p>Product Setup</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-truck-loading text-2xl"></i>
            <p>Supplier Setup</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-ruler-combined text-2xl"></i>
            <p>Style Size</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-user-tie text-2xl"></i>
            <p>Sales Man</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-weight text-2xl"></i>
            <p>Weighing Items</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-credit-card text-2xl"></i>
            <p>Credit Card's</p>
          </div>
        </div>
        {/* <!-- Center Column --> */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-file-alt text-2xl"></i>
            <p>Purchase Order</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-file-invoice text-2xl"></i>
            <p>Purchase Receive</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-tag text-2xl"></i>
            <p>Price Change</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-exclamation-triangle text-2xl"></i>
            <p>Damage/Lost</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-undo text-2xl"></i>
            <p>Return</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-percentage text-2xl"></i>
            <p>Discount</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-bullhorn text-2xl"></i>
            <p>Promotion</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-gift text-2xl"></i>
            <p>Package</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-warehouse text-2xl"></i>
            <p>Inventory</p>
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <img
              alt="Retail Master Logo"
              className="mr-4"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/BFppFI2fbBV9FVn89hD-B4P363FqO1_3MS2G-OtzAzo.jpg"
              width="100"
            />
            <img
              alt="Mediasoft Logo"
              height="50"
              src="https://storage.googleapis.com/a1aa/image/aKzzg1Tn_QuxmkfBB6DvVeIWQiSURwZerQCWD_n0Fv4.jpg"
              width="100"
            />
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-chart-line text-2xl"></i>
            <p>Chart Of Accounts</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-file-invoice-dollar text-2xl"></i>
            <p>Voucher Entry</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-file-alt text-2xl"></i>
            <p>Account Report</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-user text-2xl"></i>
            <p>Employee</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-users text-2xl"></i>
            <p>Customers</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-user-tag text-2xl"></i>
            <p>Cust. Category</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-hand-holding-usd text-2xl"></i>
            <p>Credit Collection</p>
          </div>
        </div>
        {/* <!-- Right Column --> */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-shopping-bag text-2xl"></i>
            <p>Sales</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-barcode text-2xl"></i>
            <p>Barcode Print</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-trash text-2xl"></i>
            <p>Sales Cancel</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-chart-line text-2xl"></i>
            <p>Sales Report</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-user text-2xl"></i>
            <p>Customer Report</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-percentage text-2xl"></i>
            <p>C. Discount Rpt</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-file-alt text-2xl"></i>
            <p>P.O. Report</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-bullhorn text-2xl"></i>
            <p>Promotion</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-box-open text-2xl"></i>
            <p>Stock Report</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-receipt text-2xl"></i>
            <p>Vat Report</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-gift text-2xl"></i>
            <p>Package Report</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-file-invoice text-2xl"></i>
            <p>Receive Report</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-file-invoice text-2xl"></i>
            <p>Invoice Reprint</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-undo text-2xl"></i>
            <p>Supplier Return</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-exclamation-triangle text-2xl"></i>
            <p>Dmg/Lost Report</p>
          </div>
          <div className="bg-green-600 p-4 rounded-lg text-center">
            <i className="fas fa-calendar-check text-2xl"></i>
            <p>Attendance Report</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">Ctrl + S = Sales, Ctrl + V = Sales Void</p>
      </div>
    </div>
  );
};

export default HomePage;
