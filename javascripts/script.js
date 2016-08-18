document.addEventListener("DOMContentLoaded",
	function (event) {

		//unobstrusive event binding
		document.querySelector("button").addEventListener("click",
			function () {
				var self = this;
				var name = "";

				$ajaxUtils.sendGetRequest("data/name.json",
					function (res) {
						var message = res.firstName+" "+res.lastName;
						console.log(message);
						if (res.likesChineseFood) {
							message += "Likes Chinese Food";
						}
						else{
							message += "Doesn't like Chinese Food"
						}
						message += "and uses";
						message += res.numberOfDisplays;
						message += "displays for coding";
						document.querySelector("#content").innerHTML =
				 "<h2>" + message + "</h2>";
					});
			})
	}
	);
