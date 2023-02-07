/**
 * @license LGPLv3, http://opensource.org/licenses/LGPL-3.0
 * @copyright Aimeos (aimeos.org), 2017-2018
 */



Aimeos.Product = {

	init : function() {

		Aimeos.Product.Bundle.init();
		Aimeos.Product.Download.init();
		Aimeos.Product.Selection.init();

		this.components();
		this.dataset();
	},


	components : function() {

		const components = [
			{
				name: 'characteristic/attribute',
				data: {
					items: $(".item-characteristic-attribute .attribute-list").data("items"),
					keys: $(".item-characteristic-attribute .attribute-list").data("keys"),
					prefix: $(".item-characteristic-attribute .attribute-list").data("prefix"),
					siteid: $(".item-characteristic-attribute .attribute-list").data("siteid")
				},
				mixins: [Aimeos.Product.Attribute.mixins.bind(this)()]
			},
			{
				name: 'characteristic/hidden',
				el: '.item-characteristic-hidden .attribute-list',
				data: {
					items: $(".item-characteristic-hidden .attribute-list").data("items"),
					keys: $(".item-characteristic-hidden .attribute-list").data("keys"),
					prefix: $(".item-characteristic-hidden .attribute-list").data("prefix"),
					siteid: $(".item-characteristic-hidden .attribute-list").data("siteid")
				},
				mixins: [Aimeos.Product.Attribute.mixins.bind(this)()]
			},
			{
				name: 'characteristic/variant',
				el: '.item-characteristic-variant .attribute-list',
				data: {
					items: $(".item-characteristic-variant .attribute-list").data("items"),
					keys: $(".item-characteristic-variant .attribute-list").data("keys"),
					prefix: $(".item-characteristic-variant .attribute-list").data("prefix"),
					siteid: $(".item-characteristic-variant .attribute-list").data("siteid")
				},
				mixins: [Aimeos.Product.Attribute.mixins.bind(this)()]
			},
			{
				name: 'option/config',
				el: '.item-option-config .attribute-list',
				data: {
					items: $(".item-option-config .attribute-list").data("items"),
					keys: $(".item-option-config .attribute-list").data("keys"),
					prefix: $(".item-option-config .attribute-list").data("prefix"),
					siteid: $(".item-option-config .attribute-list").data("siteid")
				},
				mixins: [Aimeos.Product.Attribute.mixins.bind(this)()]
			},
			{
				name: 'option/custom',
				el: '.item-option-custom .attribute-list',
				data: {
					items: $(".item-option-custom .attribute-list").data("items"),
					keys: $(".item-option-custom .attribute-list").data("keys"),
					prefix: $(".item-option-custom .attribute-list").data("prefix"),
					siteid: $(".item-option-custom .attribute-list").data("siteid")
				},
				mixins: [Aimeos.Product.Attribute.mixins.bind(this)()]
			},
			{
				name: 'catalog/default',
				el: '.item-category .catalog-default .category-list',
				data: {
					items: $(".item-category .catalog-default .category-list").data("items"),
					keys: $(".item-category .catalog-default .category-list").data("keys"),
					listtype: $(".item-category .catalog-default .category-list").data("listtype"),
					siteid: $(".item-category .catalog-default .category-list").data("siteid")
				},
				mixins: [Aimeos.Product.Catalog.mixins.bind(this)()]
			},
			{
				name: 'catalog/promotion',
				el: '.item-category .catalog-promotion .category-list',
				data: {
					items: $(".item-category .catalog-promotion .category-list").data("items"),
					keys: $(".item-category .catalog-promotion .category-list").data("keys"),
					listtype: $(".item-category .catalog-promotion .category-list").data("listtype"),
					siteid: $(".item-category .catalog-promotion .category-list").data("siteid")
				},
				mixins: [Aimeos.Product.Catalog.mixins.bind(this)()]
			},
			{
				name: 'supplier/default',
				el: '.item-supplier .supplier-default .supplier-list',
				data: {
					items: $(".item-supplier .supplier-default .supplier-list").data("items"),
					keys: $(".item-supplier .supplier-default .supplier-list").data("keys"),
					listtype: $(".item-supplier .supplier-default .supplier-list").data("listtype"),
					siteid: $(".item-supplier .supplier-default .supplier-list").data("siteid")
				},
				mixins: [Aimeos.Product.Supplier.mixins.bind(this)()]
			},
			{
				name: 'supplier/promotion',
				el: '.item-supplier .supplier-promotion .supplier-list',
				data: {
					items: $(".item-supplier .supplier-promotion .supplier-list").data("items"),
					keys: $(".item-supplier .supplier-promotion .supplier-list").data("keys"),
					listtype: $(".item-supplier .supplier-promotion .supplier-list").data("listtype"),
					siteid: $(".item-supplier .supplier-promotion .supplier-list").data("siteid")
				},
				mixins: [Aimeos.Product.Supplier.mixins.bind(this)()]
			},
			{
				name: 'related/bought',
				el: '.item-related-bought .product-list',
				data: {
					items: $(".item-related-bought .product-list").data("items"),
					keys: $(".item-related-bought .product-list").data("keys"),
					prefix: $(".item-related-bought .product-list").data("prefix"),
					siteid: $(".item-related-bought .product-list").data("siteid")
				},
				mixins: [Aimeos.Product.Product.mixins.bind(this)()]
			},
			{
				name: 'related/suggest',
				el: '.item-related-suggest .product-list',
				data: {
					items: $(".item-related-suggest .product-list").data("items"),
					keys: $(".item-related-suggest .product-list").data("keys"),
					prefix: $(".item-related-suggest .product-list").data("prefix"),
					siteid: $(".item-related-suggest .product-list").data("siteid")
				},
				mixins: [Aimeos.Product.Product.mixins.bind(this)()]
			},
			{
				name: 'bundle',
				el: '.item-bundle .product-list',
				data: {
					items: $(".item-bundle .product-list").data("items"),
					keys: $(".item-bundle .product-list").data("keys"),
					prefix: $(".item-bundle .product-list").data("prefix"),
					siteid: $(".item-bundle .product-list").data("siteid")
				},
				mixins: [Aimeos.Product.Product.mixins.bind(this)()]
			},
			{
				name: 'selection',
				el: '#item-selection-group',
				data: {
					items: $("#item-selection-group").data("items"),
					keys: $("#item-selection-group").data("keys"),
					siteid: $("#item-selection-group").data("siteid")
				},
				mixins: [Aimeos.Product.Selection.mixins.bind(this)()]
			},
			{
				name: 'stock',
				el: '.item-stock .stock-list',
				data: {
					items: $(".item-stock .stock-list").data("items"),
					keys: $(".item-stock .stock-list").data("keys"),
					siteid: $(".item-stock .stock-list").data("siteid"),
					numtypes: $(".item-stock .stock-list").data("numtypes")
				},
				mixins: [Aimeos.Product.Stock.mixins.bind(this)()]
			},
			{
				name: 'subscription',
				el: '.item-subscription .subscription-list',
				data: {
					items: $(".item-subscription .subscription-list").data("items"),
					keys: $(".item-subscription .subscription-list").data("keys"),
					siteid: $(".item-subscription .subscription-list").data("siteid")

				},
				mixins: [Aimeos.Product.Subscription.mixins.bind(this)()]
			},
			{
				name: 'order',
				el: '.item-order .order-list',
				data: {
					'id': null,
					'items': [],
					'fields': [],
					'filter': {},
					'included': {},
					'offset': 0,
					'limit': 25,
					'total': 0,
					'sort': '-order.id',
				},
				mixins: [Aimeos.Product.Order.mixins.bind(this)()]
			}
		]
		for (const component of components) {
			Aimeos.components[component.name] = new Vue({
				'el': document.querySelector(component.el),
				'data': component.data,
				'mixins': component.mixins
			});
		}
	},


	dataset : function() {

		$(".item-basic .item-set").on("change", function() {
			var config = $("option:selected", this).data("config");

			for(var name in config) {
				if(Aimeos.components[name]) {
					for(var key in config[name]) {
						if(Aimeos.components[name]) {
							Aimeos.components[name].add(config[name][key]);
						}
					}
				}
			}
		});
	}
};



Aimeos.Product.Attribute = {

	mixins: function() {
		return {
			beforeMount() {
				this.Aimeos = Aimeos;
			},
			methods: {
				add : function(data) {

					var idx = (this.items || []).length;
					this.$set(this.items, idx, {});

					for(var key in this.keys) {
						key = this.keys[key]; this.$set(this.items[idx], key, data && data[key] || '');
					}

					this.$set(this.items[idx], this.prefix + 'siteid', this.siteid);
				},


				can : function(idx, action) {
					if(!this.items[idx]['product.lists.siteid']) {
						return false;
					}

					if(action === 'delete') {
						return (new String(this.items[idx]['product.lists.siteid'])).startsWith(this.siteid);
					}

					if(action === 'move') {
						return this.items[idx]['product.lists.siteid'] === this.siteid && this.items[idx]['product.lists.id'] != '';
					}

					return false;
				},


				checkSite : function(key, idx) {
					return this.items[idx][key] && this.items[idx][key] != this.siteid;
				},


				getItems : function(idx) {

					var self = this;

					return function(request, response, element) {

						var type = self.items[idx] && self.items[idx]['attribute.type'] || null;
						var criteria = type ? {'==': {'attribute.type': type}} : {};

						Aimeos.getOptions(request, response, element, 'attribute', 'attribute.label', 'attribute.label', criteria);
					};
				},


				/**
				 * @deprecated 2020.01 Use item['attribute.label'] instead
				 */
				getLabel : function(idx) {

					var label = this.items[idx]['attribute.label'];

					if(this.items[idx]['attribute.type']) {
						label += ' (' + this.items[idx]['attribute.type'] + ')';
					}

					return label;
				},


				getTypeItems : function() {

					var criteria = {'>': {'attribute.type.status': 0}};

					return function(request, response, element) {
						Aimeos.getOptions(request, response, element, 'attribute/type', 'attribute.type.code', 'attribute.type.label', criteria);
					};
				},


				remove : function(idx) {
					this.items.splice(idx, 1);
				},


				title(idx) {
					return 'Site ID: ' + this.items[idx]['product.lists.siteid'] + "\n"
						+ 'Editor: ' + this.items[idx]['product.lists.editor'] + "\n"
						+ 'Created: ' + this.items[idx]['product.lists.ctime'] + "\n"
						+ 'Modified: ' + this.items[idx]['product.lists.mtime'];
				},


				update : function(ev) {

					this.$set(this.items[ev.index], this.prefix + 'id', '');
					this.$set(this.items[ev.index], this.prefix + 'siteid', this.siteid);
					this.$set(this.items[ev.index], this.prefix + 'refid', ev.value);
					this.$set(this.items[ev.index], 'attribute.label', ev.label);

					var ids = [];

					for(idx in this.items) {
						this.items[idx]['css'] = '';

						if(ids.indexOf(this.items[idx]['product.lists.siteid'] + '-' + this.items[idx]['attribute.id']) !== -1) {
							this.items[idx]['css'] = 'is-invalid';
						}

						ids.push(this.items[idx]['product.lists.refid']);
					}
				},


				updateType : function(ev) {

					this.$set(this.items[ev.index], this.prefix + 'id', '');
					this.$set(this.items[ev.index], this.prefix + 'refid', '');
					this.$set(this.items[ev.index], this.prefix + 'siteid', this.siteid);
					this.$set(this.items[ev.index], 'attribute.type', ev.label);
					this.$set(this.items[ev.index], 'attribute.label', '');
				}
			}
		}
	}
};


Aimeos.Product.Bundle = {

	init : function()  {

		var tab = $(".item-navbar .bundle");
		$(".item-basic .item-type").val() === 'bundle' ? tab.show() : tab.hide();

		$(".item-basic .item-type").on("change", function() {
			$("option:selected", this).val() === 'bundle' ? tab.show() : tab.hide();
		});
	}
};


Aimeos.Product.Catalog = {

	mixins() {
		return {
			beforeMount() {
				this.Aimeos = Aimeos;
			},
			methods: {
				add(data) {

					let idx = (this.items || []).length;
					this.$set(this.items, idx, {});

					for(let key in this.keys) {
						key = this.keys[key]; this.$set(this.items[idx], key, data && data[key] || '');
					}

					this.$set(this.items[idx], 'product.lists.siteid', this.siteid);
					this.$set(this.items[idx], 'product.lists.type', this.listtype);
				},


				can(idx, action) {
					if(this.items[idx]['product.lists.siteid']) {
						let allow = (new String(this.items[idx]['product.lists.siteid'])).startsWith(this.siteid);

						switch(action) {
							case 'delete': return allow;
							case 'change': return allow || this.items[idx]['product.lists.id'] == '';
							case 'move': return allow && this.items[idx]['product.lists.id'] != '';
						}
					}

					return false;
				},


				itemFcn() {

					return function(request, response, element) {

						let labelFcn = function(attr) {
							return attr['catalog.label'] + ' (' + attr['catalog.code'] + ')';
						}

						Aimeos.getOptions(request, response, element, 'catalog', 'catalog.label', 'catalog.label', null, labelFcn);
					}
				},


				label(idx) {

					let label = this.items[idx]['catalog.label'];

					if(this.items[idx]['catalog.code']) {
						label += ' (' + this.items[idx]['catalog.code'] + ')';
					}

					return label;
				},


				remove(idx) {
					this.items.splice(idx, 1);
				},


				title(idx) {
					return 'Site ID: ' + this.items[idx]['product.lists.siteid'] + "\n"
						+ 'Editor: ' + this.items[idx]['product.lists.editor'] + "\n"
						+ 'Created: ' + this.items[idx]['product.lists.ctime'] + "\n"
						+ 'Modified: ' + this.items[idx]['product.lists.mtime'];
				},


				update(ev) {

					this.$set(this.items[ev.index], 'product.lists.id', '');
					this.$set(this.items[ev.index], 'product.lists.type', this.listtype);
					this.$set(this.items[ev.index], 'product.lists.siteid', this.siteid);
					this.$set(this.items[ev.index], 'product.lists.refid', '');
					this.$set(this.items[ev.index], 'catalog.label', ev.label);
					this.$set(this.items[ev.index], 'catalog.id', ev.value);
					this.$set(this.items[ev.index], 'catalog.code', '');

					let ids = [];

					for(idx in this.items) {

						if(this.items[idx]['product.lists.type'] != this.listtype) {
							continue;
						}

						this.items[idx]['css'] = '';

						if(ids.indexOf(this.items[idx]['product.lists.siteid'] + '-' + this.items[idx]['catalog.id']) !== -1) {
							this.items[idx]['css'] = 'is-invalid';
						}

						ids.push(this.items[idx]['product.lists.siteid'] + '-' + this.items[idx]['catalog.id']);
					}
				}
			}
		};
	}
};



Aimeos.Product.Download = {

	init : function() {

		$(".item-download").on("change", ".fileupload", function(ev) {
			$(this.files).each( function(idx, file) {
				$("input.item-label", ev.delegateTarget).val(file.name);
				$(".custom-file-label", ev.delegateTarget).text(file.name);
			});
		});
	}
};



Aimeos.Product.Order = {

	mixins : function() {
		return {
			beforeMount: function() {
				this.Aimeos = Aimeos;

				if(this.$el.dataset && this.$el.dataset.id) {
					this.id = this.$el.dataset.id;
				}
				this.filter['order.product.productid'] = {'==':{'order.product.productid': this.id}};

				let list = [];
				try {
					if(this.$el.dataset && this.$el.dataset.fields) {
						if(window.sessionStorage) {
							list = JSON.parse(window.sessionStorage.getItem('aimeos/jqadm/productorder/fields')) || [];
						}
						if(!list.length) {
							list = JSON.parse(this.$el.dataset.fields);
						}
					}
				} catch(e) {}
				this.fields = list;
			},
			computed : {
				first : function() {
					return this.offset > 0 ? 0 : null;
				},
				prev : function() {
					return this.offset - this.limit >= 0 ? this.offset - this.limit : null;
				},
				next : function() {
					return this.offset + this.limit < this.total ? this.offset + this.limit : null;
				},
				last : function() {
					return Math.floor((this.total - 1) / this.limit) * this.limit > this.offset ? Math.floor((this.total - 1) / this.limit ) * this.limit : null;
				},
				current : function() {
					return Math.floor( this.offset / this.limit ) + 1;
				},
				pages : function() {
					return this.total != 0 ? Math.ceil(this.total / this.limit) : 1;
				}
			},
			methods : {
				value : function(key) {
					let op = Object.keys(this.filter[key] || {}).pop();
					return this.filter[key] && this.filter[key][op][key] || '';
				},
				submit : function() {
					this.fetch();
				},
				reset : function() {
					Object.assign(this.$data, {filter: {'order.product.productid': {'==':{'order.product.productid': this.id}}}});
				},
				find : function(ev, key, op) {
					if(ev.target.value !== '') {
						let expr = {};
						expr[op || '=='] = {};
						expr[op || '=='][key] = ev.target.value;
						this.$set(this.filter, key, expr);
					} else {
						this.$delete(this.filter, key);
					}
				},
				fetch : function() {
					let self = this;

					Aimeos.options.done(function(response) {

						if(response.meta && response.meta.resources && response.meta.resources['order'] ) {

							let args = {
								'filter': {'&&': []},
								'fields': {
									'order': self.fields.join(',') + ',order.customerid',
									'order/address': self.fields.join(',') + ',order.address.type',
								},
								'include': 'order/address',
								'page': {
									'offset': self.offset,
									'limit': self.limit
								},
								'sort': self.sort
							};

							for(let key in self.filter) {
								args['filter']['&&'].push(self.filter[key]);
							}

							let config = {
								'paramsSerializer': function(params) {
									return jQuery.param(params); // workaround, Axios and QS fail on [==]
								},
								'params': {}
							};

							if(response.meta.prefix && response.meta.prefix) {
								config['params'][response.meta.prefix] = args;
							} else {
								config['params'] = args;
							}

							axios.get(response.meta.resources['order'], config).then(response => {

								if(response.data) {
									self.total = response.data.meta && response.data.meta.total || 0;
									self.items = response.data.data || [];
								}

								(response.data.included || []).forEach(function(item) {
									if(!self.included[item.type]) {
										self.$set(self.included, item.type, {});
									}
									self.$set(self.included[item.type], item.id, item);
								});

							}).catch(function(error) {
								console.log('Error: ', error.message);
								if(error.response && error.response.data && error.response.data.errors) {
									error.response.data.errors.forEach(function(elem) {
										console.log(elem.title);
									});
								}
							});
						}
					});
				},
				related : function(item, type, key) {
					let id = null;
					let self = this;

					(item['relationships'] && item['relationships'][type] && item['relationships'][type]['data'] || []).forEach(function(addr) {
						if(addr.data && addr.data.id && self.included[type] && self.included[type][addr.data.id]
							&& self.included[type][addr.data.id]['attributes']['order.address.type'] === 'payment'
						) {
							id = addr.data.id;
						}
					});

					return this.included[type] && this.included[type][id] ? this.included[type][id]['attributes'][key] : '';
				},
				pagecnt : function(str) {
					return sprintf(str, this.current, this.pages);
				},
				orderby : function(key) {
					this.sort = this.sort === key ? '-' + key : key;
				},
				sortclass : function(key) {
					return this.sort === key ? 'sort-desc' : (this.sort === '-' + key ? 'sort-asc' : '');
				},
				toggleField : function(key) {
					let idx = this.fields.indexOf(key);
					idx !== -1 ? this.fields.splice(idx, 1) : this.fields.push(key);

					if(window.sessionStorage) {
						window.sessionStorage.setItem('aimeos/jqadm/productorder/fields', JSON.stringify(this.fields));
					}
				}
			},
			watch: {
				fields : function() {
					this.fetch();
				},
				filter : {
					handler: function() {
						this.fetch();
					},
					deep: true
				},
				limit : function() {
					this.fetch();
				},
				offset : function() {
					this.fetch();
				},
				sort : function() {
					this.fetch();
				}
			}
		};
	}
};



Aimeos.Product.Product = {

	mixins() {
		return {
			beforeMount() {
				this.Aimeos = Aimeos;
			},
			methods: {
				add(data) {

					let idx = (this.items || []).length;
					this.$set(this.items, idx, {});

					for(let key in this.keys) {
						key = this.keys[key]; this.$set(this.items[idx], key, data && data[key] || '');
					}

					this.$set(this.items[idx], this.prefix + 'siteid', this.siteid);
				},


				can(idx, action) {

					if(this.items[idx]['product.lists.siteid']) {
						let allow = (new String(this.items[idx]['product.lists.siteid'])).startsWith(this.siteid);

						switch(action) {
							case 'delete': return allow;
							case 'change': return allow || this.items[idx]['product.lists.id'] == '';
							case 'move': return allow && this.items[idx]['product.lists.id'] != '';
						}
					}

					return false;
				},


				itemFcn() {

					return function(request, response, element) {

						Aimeos.getOptionsProducts(request, response, element, null, function(attr) {
							return attr['product.label'] + ' (' + attr['product.code'] + ')';
						});
					}
				},


				label(idx) {

					let label = this.items[idx]['product.label'];

					if(this.items[idx]['product.code']) {
						label += ' (' + this.items[idx]['product.code'] + ')';
					}

					return label;
				},


				remove(idx) {
					this.items.splice(idx, 1);
				},


				title(idx) {
					return 'Site ID: ' + this.items[idx]['product.lists.siteid'] + "\n"
						+ 'Editor: ' + this.items[idx]['product.lists.editor'] + "\n"
						+ 'Created: ' + this.items[idx]['product.lists.ctime'] + "\n"
						+ 'Modified: ' + this.items[idx]['product.lists.mtime'];
				},


				update(ev) {

					this.$set(this.items[ev.index], this.prefix + 'id', '');
					this.$set(this.items[ev.index], this.prefix + 'siteid', this.siteid);
					this.$set(this.items[ev.index], this.prefix + 'refid', ev.value);
					this.$set(this.items[ev.index], 'product.label', ev.label);
					this.$set(this.items[ev.index], 'product.code', '');

					let ids = [];

					for(idx in this.items) {
						this.items[idx]['css'] = '';

						if(ids.indexOf(this.items[idx]['product.lists.refid']) !== -1) {
							this.items[idx]['css'] = 'is-invalid';
						}

						ids.push(this.items[idx]['product.lists.refid']);
					}
				}
			}
		};
	}
};



Aimeos.Product.Selection = {

	init : function() {

		var tab = $(".item-navbar .selection");
		['group', 'select'].includes($(".item-basic .item-type").val()) ? tab.show() : tab.hide();

		$(".item-product").on("change", ".item-basic .item-type", function() {
			['group', 'select'].includes($("option:selected", this).val()) ? tab.show() : tab.hide();
		});
	},


	mixins : function() {
		return {
			beforeMount() {
				this.Aimeos = Aimeos;
			},
			methods: {

				add : function(data) {

					var idx = this.items.length;
					this.$set(this.items, idx, {});

					for(var key in this.keys) {
						key = this.keys[key]; this.$set(this.items[idx], key, data && data[key] || '');
					}

					this.$set(this.items[idx], 'product.lists.siteid', this.siteid);
					this.$set(this.items[idx], 'product.siteid', this.siteid);
					this.$set(this.items[idx], 'product.status', 1);
					this.$set(this.items[idx], 'product.id', '');
					this.$set(this.items[idx], 'attr', []);
				},


				can : function(idx, action, attridx) {

					if(action === 'delete') {
						if(attridx) {
							return this.items[idx]['attr'][attridx]['product.lists.siteid'] && (new String(this.items[idx]['attr'][attridx]['product.lists.siteid'])).startsWith(this.siteid);
						} else {
							return this.items[idx]['product.lists.siteid'] && (new String(this.items[idx]['product.lists.siteid'])).startsWith(this.siteid);
						}
					}

					if(action === 'move') {
						if(attridx) {
							return this.items[idx]['attr'][attridx]['product.lists.siteid'] === this.siteid;
						} else {
							return this.items[idx]['product.lists.siteid'] === this.siteid && this.items[idx]['product.lists.id'] != '';
						}
					}

					return false;
				},


				checkSite : function(key, idx, attridx) {

					if(attridx) {
						return this.items[idx]['attr'][attridx][key] && this.items[idx]['attr'][attridx][key] != this.siteid;
					}

					return this.items[idx][key] && this.items[idx][key] != this.siteid;
				},


				copyItem : function(idx) {

					var len = this.items.length;
					this.$set(this.items, len, {});

					for(var key in this.items[idx]) {
						this.$set(this.items[len], key, this.items[idx][key]);
					}

					this.$set(this.items[len], 'attr', []);
					this.$set(this.items[len], 'product.id', '');
					this.$set(this.items[len], 'product.code', this.items[idx]['product.code'] + '_copy');
					this.$set(this.items[len], 'product.label', this.items[idx]['product.label'] + '_copy');
					this.$set(this.items[len], 'product.lists.siteid', this.siteid);
					this.$set(this.items[len], 'product.lists.id', '');

					for(var attridx in this.items[idx]['attr']) {
						this.$set(this.items[len]['attr'], attridx, {});

						for(var key in this.items[idx]['attr'][attridx]) {
							this.$set(this.items[len]['attr'][attridx], key, this.items[idx]['attr'][attridx][key]);
						}

						this.$set(this.items[len]['attr'][attridx], 'product.lists.siteid', this.siteid);
						this.$set(this.items[len]['attr'][attridx], 'product.lists.id', '');
					}
				},


				remove : function(idx) {
					this.items.splice(idx, 1);
				},


				getCss : function(idx) {
					return ( idx !== 0 && this.items[idx]['product.id'] &&
						this.items[idx]['attr'] && this.items[idx]['attr'].length ? 'collapsed' : 'show' );
				},


				getArticles : function(request, response) {

					Aimeos.options.done(function(data) {

						if(!data.meta.resources['product']) {
							return;
						}

						var params = {}, param = {};

						param['filter'] = {'&&': [{'=~': {'product.code': request.term}}, {'==': {'product.type': 'default'}}]};
						param['fields'] = {'product': 'product.id,product.code,product.label'};
						param['include'] = 'attribute';
						param['sort'] = 'product.code';

						if( data.meta && data.meta.prefix ) {
							params[data.meta.prefix] = param;
						} else {
							params = param;
						}

						$.ajax({
							dataType: "json",
							url: data.meta.resources['product'],
							data: params,
							success: function(result) {
								var map = {};

								(result.included || []).forEach(function(item) {
									map[item.id] = item.attributes;
								});

								response( (result.data || []).map(function(obj) {
									var list = [];

									(obj.relationships.attribute && obj.relationships.attribute.data || []).forEach(function(item) {
										if(item.attributes && item.attributes['product.lists.type'] === 'variant') {
											list.push(Object.assign({}, item.attributes, map[item.id] || {}));
										}
									});

									return {
										id: obj.id || null,
										code: obj.attributes['product.code'] || null,
										label: obj.attributes['product.label'] || null,
										stock: false,
										attr: list
									};
								}));
							}
						});
					});
				},


				title(idx, attridx) {
					return 'Site ID: ' + this.items[idx]['attr'][attridx]['product.lists.siteid'] + "\n"
						+ 'Editor: ' + this.items[idx]['attr'][attridx]['product.lists.editor'] + "\n"
						+ 'Created: ' + this.items[idx]['attr'][attridx]['product.lists.ctime'] + "\n"
						+ 'Modified: ' + this.items[idx]['attr'][attridx]['product.lists.mtime'];
				},


				updateProductItem : function(idx, ev, item) {

					if(item) {
						this.$set(this.items[idx], 'product.id', item.id);
						this.$set(this.items[idx], 'product.code', item.code);
						this.$set(this.items[idx], 'product.label', item.label);
						this.$set(this.items[idx], 'stock', item.stock);
						this.$set(this.items[idx], 'attr', item.attr);
					}
				},


				addAttributeItem : function(idx) {

					if(!this.items[idx]['attr']) {
						this.$set(this.items[idx], 'attr', []);
					}

					var len = this.items[idx]['attr'].length;

					if(!this.items[idx]['attr'][len]) {
						this.$set(this.items[idx]['attr'], len, {});
					}

					var keys = ['product.lists.id', 'product.lists.refid', 'attribute.label'];

					for(key in keys) {
						key = keys[key]; this.$set(this.items[idx]['attr'][len], key, '');
					}

					this.$set(this.items[idx]['attr'][len], 'product.lists.siteid', this.siteid);
				},


				getAttributeData : function(idx) {

					if(this.items[idx] && this.items[idx]['attr']) {
						return this.items[idx]['attr'];
					}

					return [];
				},


				getAttributeItems : function() {

					return function(request, response, element) {

						var labelFcn = function(attr) {
							return attr['attribute.label'] + ' (' + attr['attribute.type'] + ')';
						}
						Aimeos.getOptions(request, response, element, 'attribute', 'attribute.label', 'attribute.label', null, labelFcn);
					}
				},


				getAttributeLabel : function(idx, attridx) {

					var label = this.items[idx]['attr'][attridx]['attribute.label'];

					if(this.items[idx]['attr'][attridx]['attribute.type']) {
						label += ' (' + this.items[idx]['attr'][attridx]['attribute.type'] + ')';
					}

					return label;
				},


				removeAttributeItem : function(idx, attridx) {
					this.items[idx]['attr'].splice(attridx, 1);
				},


				updateAttributeItem : function(ev, idx, listidx) {

					this.$set(this.items[idx]['attr'][listidx], 'product.lists.id', '');
					this.$set(this.items[idx]['attr'][listidx], 'product.lists.siteid', this.siteid);
					this.$set(this.items[idx]['attr'][listidx], 'product.lists.refid', ev.value);
					this.$set(this.items[idx]['attr'][listidx], 'attribute.label', ev.label);
					this.$set(this.items[idx]['attr'][listidx], 'attribute.type', '');
				}
			}
		}
	}
};



Aimeos.Product.Stock = {

	mixins() {
		return {
			beforeMount() {
				this.Aimeos = Aimeos;
			},
			methods: {
				add(data) {

					var idx = (this.items || []).length;
					this.$set(this.items, idx, {});

					for(var key in this.keys) {
						key = this.keys[key]; this.$set(this.items[idx], key, data && data[key] || '');
					}

					this.$set(this.items[idx], 'stock.siteid', this.siteid);
				},


				can(idx, action) {
					if(this.items[idx]['stock.siteid']) {
						let allow = (new String(this.items[idx]['stock.siteid'])).startsWith(this.siteid);

						switch(action) {
							case 'delete': return allow;
							case 'change': return allow || this.items[idx]['stock.id'] == '';
						}
					}

					return false;
				},


				checked(idx) {
					return this.items[idx].checked || this.items[idx].checked === undefined && this.items[idx]['stock.stocklevel'] !== null;
				},


				checkType() {
					var types = [];

					for(idx in this.items) {
						this.items[idx]['css'] = '';

						if(types.indexOf(this.items[idx]['stock.type']) !== -1) {
							this.items[idx]['css'] = 'is-invalid';
						}

						types.push(this.items[idx]['stock.type']);
					}
				},


				remove(idx) {
					this.items.splice(idx, 1);
				},


				toggle(idx) {
					this.$set(this.items[idx], 'checked', !this.checked(idx));
				}
			}
		}
	}
};



Aimeos.Product.Subscription = {

	mixins() {
		return {
			beforeMount() {
				this.Aimeos = Aimeos;
			},
			methods: {
				add(data) {

					const idx = this.items.length;
					this.$set(this.items, idx, {});

					for(let key in this.keys) {
						key = this.keys[key]; this.$set(this.items[idx], key, data && data[key] || '');
					}

					this.$set(this.items[idx], 'product.lists.siteid', this.siteid);
				},


				can(idx, action) {
					if(this.items[idx]['product.lists.siteid']) {
						switch(action) {
							case 'create': return !this.items[idx]['attribute.id'];
							case 'change': return (new String(this.items[idx]['product.lists.siteid'])).startsWith(this.siteid);
						}
					}

					return false;
				},


				remove(idx) {
					this.items.splice(idx, 1);
				},


				value(idx) {
					const map = this.items[idx];
					return 'P' + (map['Y'] > 0 ? parseInt( map['Y'] ) + 'Y' : '')
						+ (map['M'] > 0 ? parseInt( map['M'] ) + 'M' : '')
						+ (map['W'] > 0 ? parseInt( map['W'] ) + 'W' : '')
						+ (map['D'] > 0 ? parseInt( map['D'] ) + 'D' : '')
						+ (map['H'] > 0 ? 'T' + parseInt( map['H'] ) + 'H' : '');
				}
			}
		}
	}
};


Aimeos.Product.Supplier = {

	mixins() {
		return {
			beforeMount() {
				this.Aimeos = Aimeos;
			},
			methods: {
				add(data) {

					let idx = (this.items || []).length;
					this.$set(this.items, idx, {});

					for(let key in this.keys) {
						key = this.keys[key]; this.$set(this.items[idx], key, data && data[key] || '');
					}

					this.$set(this.items[idx], 'product.lists.siteid', this.siteid);
					this.$set(this.items[idx], 'product.lists.type', this.listtype);
				},


				can(idx, action) {
					if(this.items[idx]['product.lists.siteid']) {
						let allow = (new String(this.items[idx]['product.lists.siteid'])).startsWith(this.siteid);

						switch(action) {
							case 'delete': return allow;
							case 'change': return allow || this.items[idx]['product.lists.id'] == '';
							case 'move': return allow && this.items[idx]['product.lists.id'] != '';
						}
					}

					return false;
				},


				itemFcn() {

					return function(request, response, element) {

						let labelFcn = function(attr) {
							return attr['supplier.label'] + ' (' + attr['supplier.code'] + ')';
						}

						Aimeos.getOptions(request, response, element, 'supplier', 'supplier.label', 'supplier.label', null, labelFcn);
					}
				},


				label(idx) {

					let label = this.items[idx]['supplier.label'];

					if(this.items[idx]['supplier.code']) {
						label += ' (' + this.items[idx]['supplier.code'] + ')';
					}

					return label;
				},


				remove(idx) {
					this.items.splice(idx, 1);
				},


				title(idx) {
					return 'Site ID: ' + this.items[idx]['product.lists.siteid'] + "\n"
						+ 'Editor: ' + this.items[idx]['product.lists.editor'] + "\n"
						+ 'Created: ' + this.items[idx]['product.lists.ctime'] + "\n"
						+ 'Modified: ' + this.items[idx]['product.lists.mtime'];
				},


				update(ev) {

					this.$set(this.items[ev.index], 'product.lists.id', '');
					this.$set(this.items[ev.index], 'product.lists.type', this.listtype);
					this.$set(this.items[ev.index], 'product.lists.siteid', this.siteid);
					this.$set(this.items[ev.index], 'product.lists.refid', '');
					this.$set(this.items[ev.index], 'supplier.label', ev.label);
					this.$set(this.items[ev.index], 'supplier.id', ev.value);
					this.$set(this.items[ev.index], 'supplier.code', '');

					let ids = [];

					for(idx in this.items) {

						if(this.items[idx]['product.lists.type'] != this.listtype) {
							continue;
						}

						this.items[idx]['css'] = '';

						if(ids.indexOf(this.items[idx]['supplier.id']) !== -1) {
							this.items[idx]['css'] = 'is-invalid';
						}

						ids.push(this.items[idx]['supplier.id']);
					}
				}
			}
		};
	}
};



$(function() {

	Aimeos.Product.init();
});
