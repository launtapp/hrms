// Copyright (c) 2020, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

const example_tax_slabs = [
	{
	 "condition": null,
	 "from_amount": 150001.0,
	 "percent_deduction": 5.0,
	 "to_amount": 300000.0
	},
	{
	 "condition": null,
	 "from_amount": 300001.0,
	 "percent_deduction": 10.0,
	 "to_amount": 500000.0
	},
	{
	 "condition": null,
	 "from_amount": 500001.0,
	 "percent_deduction": 15.0,
	 "to_amount": 750000.0
	},
	{
	 "condition": null,
	 "from_amount": 750001.0,
	 "parent": "Thai Tax Slab",
	 "parentfield": "slabs",
	 "parenttype": "Income Tax Slab",
	 "percent_deduction": 20.0,
	 "to_amount": 1000000.0
	},
	{
	 "condition": null,
	 "from_amount": 1000001.0,
	 "percent_deduction": 25.0,
	 "to_amount": 2000000.0
	},
	{
	 "condition": null,
	 "from_amount": 2000001.0,
	 "percent_deduction": 30.0,
	 "to_amount": 5000000.0
	},
	{
	 "condition": null,
	 "from_amount": 5000001.0,
	 "percent_deduction": 35.0,
	 "to_amount": 10000000000.0
	}
   ]

const fetch_data = (frm) => {
	frm.set_value('slabs', [])
	// frm.set_value('effective_from', frappe.format(new Date().toISOString(), { fieldtype: 'Date' }))
		example_tax_slabs.forEach(slab => {
			frm.add_child('slabs', slab)
		})
		frm.refresh_fields("slabs")
}

frappe.ui.form.on('Income Tax Slab', {
	load_slabs(frm) {
		fetch_data(frm)
	},
	currency: function(frm) {
		frm.refresh_fields();
	}
});
