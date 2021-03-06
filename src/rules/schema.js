export const sortClassMembersSchema = [{
	type: 'object',
	properties: {
		order: { '$ref': '#/definitions/order' },
		groups: {
			patternProperties: {
				'^.+$': { '$ref': '#/definitions/order' },
			},
			additionalProperties: false,
		},
		stopAfterFirstProblem: {
			type: 'boolean',
		},
		accessorPairPositioning: {
			enum: [ 'getThenSet', 'setThenGet', 'together', 'any' ],
		},
	},
	definitions: {
		order: {
			type: 'array',
			items: {
				anyOf: [
					{ type: 'string' },
					{
						type: 'object',
						properties: {
							name: { type: 'string' },
							type: { enum: [ 'method', 'property' ] },
							static: { type: 'boolean' },
							kind: { enum: [ 'get', 'set' ] },
						},
						additionalProperties: false,
					},
				],
			},
		},
	},
	additionalProperties: false,
}];
