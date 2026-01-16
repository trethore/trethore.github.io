import type { ProjectContent } from '@/types';

export const mqsContent: ProjectContent = {
  slug: 'mqs',
  sections: [
    {
      titleKey: 'projects.content.mqs.whatIsThis.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.mqs.whatIsThis.p1' },
        { type: 'text', content: 'projects.content.mqs.whatIsThis.p2' },
      ],
    },
    {
      titleKey: 'projects.content.mqs.overview.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.mqs.overview.intro' },
        { type: 'image-placeholder', alt: 'projects.content.mqs.overview.architectureAlt' },
      ],
    },
    {
      titleKey: 'projects.content.mqs.overview.coreArchitecture.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.mqs.overview.coreArchitecture.intro' },
        {
          type: 'list',
          items: [
            'projects.content.mqs.overview.coreArchitecture.scriptingEngine',
            'projects.content.mqs.overview.coreArchitecture.eventSystem',
            'projects.content.mqs.overview.coreArchitecture.runtimeHooking',
            'projects.content.mqs.overview.coreArchitecture.userInterfaces',
            'projects.content.mqs.overview.coreArchitecture.commandSystem',
            'projects.content.mqs.overview.coreArchitecture.keybindManagement',
            'projects.content.mqs.overview.coreArchitecture.configuration',
          ],
        },
      ],
    },
    {
      titleKey: 'projects.content.mqs.overview.techStack.title',
      level: 4,
      blocks: [
        {
          type: 'list',
          items: [
            'projects.content.mqs.overview.techStack.graalvm',
            'projects.content.mqs.overview.techStack.bytebuddy',
            'projects.content.mqs.overview.techStack.fabric',
            'projects.content.mqs.overview.techStack.yarn',
            'projects.content.mqs.overview.techStack.lombok',
          ],
        },
      ],
    },
    {
      titleKey: 'projects.content.mqs.technical.title',
      level: 3,
      blocks: [],
    },
    {
      titleKey: 'projects.content.mqs.technical.discovery.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.mqs.technical.discovery.intro' },
        {
          type: 'code',
          language: 'javascript',
          content: `// @module(main=MyModule, name=My Module, version=1.0.0)
class MyModule {
    onEnable() {
        // Called when the script is enabled
    }

    onDisable() {
        // Called when the script is disabled
    }
}

exportModule(MyModule);`,
        },
        { type: 'text', content: 'projects.content.mqs.technical.discovery.explanation' },
      ],
    },
    {
      titleKey: 'projects.content.mqs.technical.javaInterop.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.mqs.technical.javaInterop.intro' },
        {
          type: 'code',
          language: 'javascript',
          content: `const MinecraftClient = net.minecraft.client.MinecraftClient;
const Text = net.minecraft.text.Text;

const client = MQS.utils.mc.client();
if (client && client.player) {
    client.player.sendMessage(Text.literal("Hello from script!"), false);
}`,
        },
        { type: 'text', content: 'projects.content.mqs.technical.javaInterop.extend' },
        {
          type: 'code',
          language: 'javascript',
          content: `const GameRenderer = net.minecraft.client.render.GameRenderer;

MQS.hooks.extendMapped(
    GameRenderer,
    "render",
    function(original, delta) {
        // Custom rendering logic
        return original.call(this, delta);
    }
);`,
        },
      ],
    },
    {
      titleKey: 'projects.content.mqs.technical.hooking.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.mqs.technical.hooking.intro' },
        {
          type: 'code',
          language: 'javascript',
          content: `this.hookDisposer = MQS.hooks.before(
    MinecraftClient,
    "setScreen",
    function(context, args, next) {
        const screen = args[0];
        println("Screen changed: " + (screen ? screen.getTitle().getString() : "none"));
        return next(...args); // Continue to original method
    }
);`,
        },
        { type: 'text', content: 'projects.content.mqs.technical.hooking.useCase' },
      ],
    },
    {
      titleKey: 'projects.content.mqs.technical.performance.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.mqs.technical.performance.intro' },
        {
          type: 'list',
          items: [
            'projects.content.mqs.technical.performance.contextPooling',
            'projects.content.mqs.technical.performance.selectiveRetransformation',
            'projects.content.mqs.technical.performance.threadSafety',
            'projects.content.mqs.technical.performance.lazyLoading',
          ],
        },
      ],
    },
    {
      titleKey: 'projects.content.mqs.technical.security.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.mqs.technical.security.intro' },
        {
          type: 'list',
          items: [
            'projects.content.mqs.technical.security.classWhitelisting',
            'projects.content.mqs.technical.security.isolatedContexts',
            'projects.content.mqs.technical.security.controlledHooks',
          ],
        },
      ],
    },
    {
      titleKey: 'projects.content.mqs.docs.title',
      level: 3,
      blocks: [],
    },
    {
      titleKey: 'projects.content.mqs.docs.installation.title',
      level: 4,
      blocks: [
        {
          type: 'list',
          items: [
            'projects.content.mqs.docs.installation.step1',
            'projects.content.mqs.docs.installation.step2',
            'projects.content.mqs.docs.installation.step3',
            'projects.content.mqs.docs.installation.step4',
          ],
        },
        { type: 'text', content: 'projects.content.mqs.docs.installation.jvmArgs' },
        {
          type: 'code',
          language: 'text',
          content: `-XX:+UnlockExperimentalVMOptions -XX:+UseJVMCICompiler`,
        },
      ],
    },
    {
      titleKey: 'projects.content.mqs.docs.firstScript.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.mqs.docs.firstScript.intro' },
        {
          type: 'code',
          language: 'javascript',
          content: `const Text = net.minecraft.text.Text;

// @module(main=HelloModule, name=Hello World, version=1.0.0)
class HelloModule {
    onEnable() {
        println("Hello Module enabled!");
        const player = MQS.utils.mc.player();
        if (player) {
            player.sendMessage(Text.literal("Hello from my script!"), false);
        }
    }

    onDisable() {
        println("Hello Module disabled!");
    }
}

exportModule(HelloModule);`,
        },
      ],
    },
    {
      titleKey: 'projects.content.mqs.docs.inGame.title',
      level: 4,
      blocks: [
        { type: 'text', content: 'projects.content.mqs.docs.inGame.intro' },
        {
          type: 'list',
          items: [
            'projects.content.mqs.docs.inGame.scriptsMenu',
            'projects.content.mqs.docs.inGame.console',
            'projects.content.mqs.docs.inGame.keybinds',
            'projects.content.mqs.docs.inGame.settings',
          ],
        },
        { type: 'text', content: 'projects.content.mqs.docs.inGame.consoleCommands' },
        {
          type: 'list',
          items: [
            'projects.content.mqs.docs.inGame.cmdHelp',
            'projects.content.mqs.docs.inGame.cmdList',
            'projects.content.mqs.docs.inGame.cmdEnable',
            'projects.content.mqs.docs.inGame.cmdDisable',
            'projects.content.mqs.docs.inGame.cmdRefresh',
            'projects.content.mqs.docs.inGame.cmdSave',
          ],
        },
      ],
    },
    {
      titleKey: 'projects.content.mqs.opinion.title',
      level: 3,
      blocks: [
        { type: 'text', content: 'projects.content.mqs.opinion.intro' },
        { type: 'image-placeholder', alt: 'projects.content.mqs.opinion.consoleAlt' },
        { type: 'text', content: 'projects.content.mqs.opinion.graalChallenge' },
        { type: 'text', content: 'projects.content.mqs.opinion.hookingChallenge' },
        { type: 'text', content: 'projects.content.mqs.opinion.architecture' },
        { type: 'text', content: 'projects.content.mqs.opinion.lifecycle' },
        { type: 'text', content: 'projects.content.mqs.opinion.future' },
        { type: 'text', content: 'projects.content.mqs.opinion.cta' },
      ],
    },
  ],
};
