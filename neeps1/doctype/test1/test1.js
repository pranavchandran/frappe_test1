// Copyright (c) 2020, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('test1', {
	refresh: function(frm) {
		debugger
		if (frm.doc.user_name){
			debugger
			console.log('hello')
		}

	}
});
