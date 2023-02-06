"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseApiMongoModel = void 0;
const sanitize = (_a) => {
    var { $__, $isNew, __v, _doc } = _a, rest = __rest(_a, ["$__", "$isNew", "__v", "_doc"]);
    return (Object.assign(Object.assign(Object.assign({}, rest), _doc), { id: _doc._id }));
};
class BaseApiMongoModel {
    constructor(model) {
        this.model = model;
    }
    createFilter(query) {
        var _a;
        const filter = {};
        if ((_a = query === null || query === void 0 ? void 0 : query.filter) === null || _a === void 0 ? void 0 : _a.length) {
            for (const el of query.filter) {
                if (el.includes('||')) {
                    let [_name, type, _value] = el.split('||');
                    if (_name === 'q' && type === 'cont') {
                        _name = 'name';
                        type = '$regex';
                        filter[_name] = new RegExp(_value, 'i');
                    }
                    else {
                        const value = _value.includes(',') ? _value.split(',') : _value;
                        const name = _name === 'id' ? '_id' : _name;
                        filter[name] = {};
                        filter[name][type] = value;
                    }
                }
                else {
                    const [name, typeOrValue, value] = el.split(',');
                    filter[name] = {};
                    let _type;
                    let _value;
                    if (!value) {
                        _type = '$eq';
                        if (typeOrValue === 'in') {
                            _value = null;
                        }
                        else {
                            _value = typeOrValue;
                        }
                    }
                    else {
                        _type = `$${typeOrValue}`;
                        _value = typeOrValue === 'in' ? value.split('|') : value;
                    }
                    if (_value === 'now') {
                        _value = new Date().toString();
                    }
                    if (_value === 'true') {
                        _value = true;
                    }
                    filter[name][_type] = _value;
                }
            }
        }
        return filter;
    }
    async readAll(query) {
        var _a;
        const order = {};
        if ((_a = query === null || query === void 0 ? void 0 : query.sort) === null || _a === void 0 ? void 0 : _a.length) {
            for (const el of query.sort) {
                const [name, value] = el.split(',');
                order[name] = value;
            }
        }
        const skip = +query.limit * (+query.page - 1) || undefined;
        const limit = +query.limit || undefined;
        const filter = this.createFilter(query);
        const data = await this.model
            .find(filter)
            .sort(order)
            .skip(skip)
            .limit(limit)
            .exec();
        return data.map(sanitize);
    }
    async find(query) {
        return await this.model.find(query).exec();
    }
    async getUniqueIds() {
        const data = await this.find({});
        return data.map(({ id }) => id);
    }
    async readById(id) {
        return await this.model.findById(id).exec();
    }
    async getTotal(query) {
        const filter = this.createFilter(query);
        return this.model.count(filter);
    }
}
exports.BaseApiMongoModel = BaseApiMongoModel;
//# sourceMappingURL=BaseApiMongoModel.js.map