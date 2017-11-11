module.exports = function(str){
    return str.replace(/-/g, ' ').replace(/\w\S*/g, function(txt){
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
};
