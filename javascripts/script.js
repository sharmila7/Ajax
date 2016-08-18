document.addEventListener("DOMContentLoaded",
	function (event) {

		//unobstrusive event binding
		document.querySelector("button").addEventListener("click",
			function () {
				var self = this;
				var name = "";

				$ajaxUtils.sendGetRequest("/data/name.txt",
					function (request) {
						console.log("hi");
						self.name = request.responseText;
						cosole.log(self.name);
					});
				document.querySelector("#content").innerHTML =
				 "Hello"+self.name+"!";
			})
	}
	);
