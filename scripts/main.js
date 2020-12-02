(() => {
	const ui = require("ui-lib/library");
	
	ui.addButton("self-destruct", "rubble-1-0", () => {
		/*if (Vars.state.rules.mode() != Gamemode.sandbox) {
			Vars.ui.showInfoToast("[red]Sandbox only[]", 4);
			return;
		}*/
		Vars.player.unit().kill();
	});
})(); 