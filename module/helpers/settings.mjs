import { AlienConfig } from "./alienRPGConfig.mjs"

export default function () {
	// Register system settings

	game.settings.registerMenu("alienrpg-homebrew", "alienrpgSettings", {
		name: "ALIENRPG.MenuName",
		label: "ALIENRPG.MenuLabel",
		hint: "ALIENRPG.MenuHint",
		icon: "fas fa-palette",
		type: AlienConfig,
		restricted: false,
	})
	game.settings.register("alienrpg-homebrew", "evolved", {
		name: "ALIENRPG.Evolved",
		hint: "ALIENRPG.EvolvedHint",
		scope: "world",
		type: Boolean,
		default: true,
		config: true,
		restricted: true,
		onChange: () => {
			location.reload()
		},
	})
	game.settings.register("alienrpg-homebrew", "autopanic", {
		name: "ALIENRPG.AutoPanic",
		hint: "ALIENRPG.AutoPanicHint",
		scope: "world",
		type: Boolean,
		default: true,
		config: true,
		restricted: true,
	})

	game.settings.register("alienrpg-homebrew", "dollar", {
		name: "ALIENRPG.Dollar",
		hint: "ALIENRPG.DollarNote",
		scope: "world",
		type: Boolean,
		default: true,
		config: true,
	})

	game.settings.register("alienrpg-homebrew", "switchMouseKeys", {
		name: "ALIENRPG.SwitchKeys",
		hint: "ALIENRPG.SwitchKeysHint",
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload()
		},
	})

	game.settings.register("alienrpg-homebrew", "alienrpgHideInitChat", {
		name: "ALIENRPG.hideInitChat",
		hint: "ALIENRPG.hideInitChatHint",
		scope: "world",
		config: true,
		default: false,
		type: Boolean,
	})

	game.settings.register("alienrpg-homebrew", "switchJournalColour", {
		name: "ALIENRPG.hideJournalBGImage",
		hint: "ALIENRPG.hideJournalBGImageNote",
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload()
		},
	})

	game.settings.register("alienrpg-homebrew", "switchchatbackground", {
		name: "ALIENRPG.hideChatBGImage",
		hint: "ALIENRPG.hideChatBGImageNote",
		scope: "client",
		type: Boolean,
		default: false,
		config: true,
		onChange: () => {
			location.reload()
		},
	})

	game.settings.register("alienrpg-homebrew", "macroShorthand", {
		name: "ALIENRPG.DefMacro",
		hint: "ALIENRPG.DefMacroHint",
		scope: "world",
		type: Boolean,
		default: true,
		config: true,
	})

	// register setting for add/remove menu button
	game.settings.register("alienrpg-homebrew", "addMenuButton", {
		name: "ALIENRPG.AddMenuName",
		hint: "ALIENRPG.AddMenuHint",
		scope: "world",
		config: true,
		default: AlienConfig.getDefaults.addMenuButton,
		type: Boolean,
		onChange: (enabled) => {
			AlienConfig.toggleConfigButton(enabled)
		},
	})

	game.settings.register("alienrpg-homebrew", "defaultTokenSettings", {
		name: "ALIENRPG.DefProto",
		hint: "ALIENRPG.DefProtoHint",
		scope: "world",
		config: true,
		default: true,
		type: Boolean,
	})

	// Register system settings
	game.settings.register("alienrpg-homebrew", "fontColour", {
		name: "ALIENRPG.Fontpick",
		label: "ALIENRPG.Colpick",
		hint: "ALIENRPG.ColpickHint",
		icon: "fas fa-dice-d20",
		restricted: false,
		type: String,
		config: false,
		scope: "client",
		default: "#adff2f",
	})

	game.settings.register("alienrpg-homebrew", "fontStyle", {
		name: "ALIENRPG.FontStyle",
		label: "ALIENRPG.StylePicker",
		hint: "ALIENRPG.StylePickerHint",
		icon: "fas fa-cogs",
		restricted: false,
		scope: "client",
		type: String,
		config: false,
		default: "OCR-A",
	})

	game.settings.register("alienrpg-homebrew", "alienitemselect", {
		name: "ALIENRPG.FontStyle",
		restricted: false,
		scope: "client",
		type: String,
		config: false,
		default: "#e0f287",
	})

	game.settings.register("alienrpg-homebrew", "aliendarkergreen", {
		name: "ALIENRPG.FontStyle",
		restricted: false,
		scope: "client",
		type: String,
		config: false,
		default: "#29a253",
	})
	game.settings.register("alienrpg-homebrew", "alienoddtab", {
		name: "ALIENRPG.FontStyle",
		restricted: false,
		scope: "client",
		type: String,
		config: false,
		default: "#14160c",
	})
	game.settings.register("alienrpg-homebrew", "aliencrt", {
		name: "ALIENRPG.FontStyle",
		restricted: false,
		scope: "client",
		type: Boolean,
		config: false,
		default: false,
	})

	game.settings.register("alienrpg-homebrew", "systemMigrationVersion", {
		name: "System Migration Version",
		scope: "world",
		config: false,
		type: String,
		default: 0,
	})

	game.settings.register("alienrpg-homebrew", "alienrpgDevMessageVersionNumber", {
		name: "Message from the devs",
		hint: "Used to track last message id from the Alien RPG devs",
		scope: "world",
		config: false,
		default: 0,
		type: Number,
	})

	game.settings.register("alienrpg-homebrew", "JournalFontColour", {
		name: "ALIENRPG.Fontpick",
		label: "ALIENRPG.Colpick",
		hint: "ALIENRPG.ColpickHint",
		icon: "fas fa-dice-d20",
		restricted: false,
		type: String,
		config: false,
		scope: "client",
		default: "#b1e0e7",
	})

	game.settings.register("alienrpg-homebrew", "ARPGSemaphore", {
		name: "Semaphore Flag",
		hint: "Flag for running sequential actions/scripts",
		scope: "world",
		type: String,
		config: false,
		default: "",
	})
}
