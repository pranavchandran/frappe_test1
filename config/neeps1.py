from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
        {
			"label": _("Neeps1"),
			"items": [
				{
					"type": "doctype",
					"name": "test1",
					"onboard": 1,
				}

			]
		}
    ]
