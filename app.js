$DEBUG = true;

Object.prototype.toArray = function() {
	return Array.prototype.slice.call(this);
};

Array.prototype.find = function(comp) {
	var ret = null;
	this.some(function(i) {
		if (comp(i)) {
			ret = i;
			return true;
		}
	});
	return ret;
};

AutoCalc = {};

AutoCalc.items = function() {
	var tables = document.getElementsByTagName('table').toArray();
	return tables.map(function(i){ return i.id });
};

AutoCalc.write = function(str) {
	var dst = document.getElementById('result');
	dst.textContent = str;
};

AutoCalc.getCheckedRadioButton = function(name) {
	var ret = null;
	ret = document.getElementsByName(name).toArray();
	ret = ret.find(function(i) {
		return i.checked;
	});
	return ret;
};
