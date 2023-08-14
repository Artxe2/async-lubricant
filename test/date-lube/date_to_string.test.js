import { assert, describe, it } from "vitest"

import { dateToString as date_to_string } from "date-lube"

describe(
	"date_to_string",
	() => {
		it(
			"default equals",
			() => {
				const date = new Date("2222-03-04T11:22:33.444")
				const default_string = date_to_string(date)
				assert.equal(default_string, "2222-03-04T11:22:33.444")
			}
		)
		it(
			"formatted equals",
			() => {
				const date = new Date("2222-03-04T11:22:33.444")
				const formatted_string = date_to_string(date, "HHhmmmssSsss _ YYYY/MM/DD")
					.replace("S", "s")
				assert.equal(formatted_string, "11h22m33s444 _ 2222/03/04")
			}
		)
	}
)