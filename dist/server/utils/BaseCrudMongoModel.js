"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCrudMongoModel = void 0;
const BaseApiMongoModel_1 = require("./BaseApiMongoModel");
class BaseCrudMongoModel extends BaseApiMongoModel_1.BaseApiMongoModel {
    constructor(model) {
        super(model);
        this.model = model;
    }
    async create(book) {
        const newBook = new this.model(book);
        return newBook.save();
    }
    async update(id, element) {
        return await this.model.findByIdAndUpdate(id, element, { new: true });
    }
    async delete(id) {
        return await this.model.findByIdAndRemove(id);
    }
}
exports.BaseCrudMongoModel = BaseCrudMongoModel;
//# sourceMappingURL=BaseCrudMongoModel.js.map