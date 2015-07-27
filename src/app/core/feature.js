var appRoot = "../";
var uuid = require('node-uuid');
var Params = require(appRoot + 'core/params');
var Parameters = require(appRoot + 'core/parameters');
var StringValue = Parameters.StringValue;
var Registry = require(appRoot + "core/registry");

class Feature {
    constructor(type, params, name, id = Feature.generateID(), group = null){
        this.type = type;
        this.params = params;
        this.name = new StringValue(name);
        this.id = id;
        this.group = group;
        this.type = type;
    }

    static generateID() {
        return uuid.v1();
    }

    updateParameter(key, value){
        this.params.updateParameter(key, value);
    }

    toJSON() {
        let output = {};
        output.id = this.id;
        output.name = this.name.toJSON();
        output.type = this.type;
        output.params = this.params.toJSON();
        //TODO: Fix groups!
        //output.group = this.group.toJSON();
        return output;
    }

    //TODO: This needs to return the right subclass of Feature, not just the right data! 
    static fromJSON(json) {
        return Feature.makeFeature(json.type, json.params, json.name);
    }

    static makeFeature(type, values, name){
        if(Registry.registeredFeatures.hasOwnProperty(type)){
            return new Registry.registeredFeatures[type](values, name);
        } else {
            throw new Error("Feature " + type + " has not been registered.");
        }
    }
}

module.exports = Feature;