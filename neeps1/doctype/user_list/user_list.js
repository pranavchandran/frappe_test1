// Copyright (c) 2020, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('User List', {
	refresh: function(frm) {
		debugger
		

		if (frm.doc.user_name==undefined){
			frm.doc.user_name = user;
			refresh_field("user_name");
			debugger
			console.log('hello')
			console.log(frm.doc.user_name)
		}

	}
});
