document.addEventListener("DOMContentLoaded",
	function (event) {

		//unobstrusive event binding
		document.querySelector("button").addEventListener("click",function () {
				var self = this;
				var name = "";
                                console.log("hi");
				$ajaxUtils.sendGetRequest("data/name.txt",
					function (request) {
						self.name = request.responseText;
						cosole.log("welcome");
					});
				document.querySelector("#content").innerHTML =
				 "Hello"+self.name+"!";
			})
	}
	);
