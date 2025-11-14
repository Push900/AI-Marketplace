// Mock data for AI Marketplace

export const aiModels = [
  // Text/NLP
  { name: "ChatGPT", developer: "OpenAI", url: "https://chat.openai.com", description: "Advanced conversational AI for natural language tasks", category: "Text / NLP", pricing: "Freemium", tags: ["chat", "text"], free_alternative: "" },
  { name: "GPT-4o", developer: "OpenAI", url: "https://openai.com/gpt-4", description: "Most capable GPT model with multimodal capabilities", category: "Text / NLP", pricing: "Paid", tags: ["advanced", "text"], free_alternative: "ChatGPT" },
  { name: "Claude 3.5 Sonnet", developer: "Anthropic", url: "https://claude.ai", description: "Powerful AI assistant with long context window", category: "Text / NLP", pricing: "Freemium", tags: ["chat", "text"], free_alternative: "" },
  { name: "Gemini 1.5 Pro", developer: "Google", url: "https://gemini.google.com", description: "Google's most advanced AI model", category: "Text / NLP", pricing: "Freemium", tags: ["multimodal", "text"], free_alternative: "" },
  { name: "Mistral 7B", developer: "Mistral AI", url: "https://mistral.ai", description: "Open source language model with strong performance", category: "Text / NLP", pricing: "Free", tags: ["open-source", "text"], free_alternative: "" },
  { name: "Llama 3", developer: "Meta", url: "https://ai.meta.com/llama", description: "Meta's open source large language model", category: "Text / NLP", pricing: "Free", tags: ["open-source", "text"], free_alternative: "" },
  { name: "Command R+", developer: "Cohere", url: "https://cohere.com/models/command", description: "Enterprise-grade language model for businesses", category: "Text / NLP", pricing: "Paid", tags: ["enterprise", "text"], free_alternative: "Mistral 7B" },
  { name: "Falcon 180B", developer: "TII", url: "https://falconllm.tii.ae", description: "Large open source language model", category: "Text / NLP", pricing: "Free", tags: ["open-source", "text"], free_alternative: "" },
  { name: "Mixtral 8x7B", developer: "Mistral AI", url: "https://mistral.ai", description: "Mixture of experts model with excellent performance", category: "Text / NLP", pricing: "Free", tags: ["open-source", "text"], free_alternative: "" },
  { name: "Vicuna", developer: "LMSYS", url: "https://vicuna.lmsys.org", description: "Open source chatbot trained by fine-tuning LLaMA", category: "Text / NLP", pricing: "Free", tags: ["open-source", "chat"], free_alternative: "" },
  { name: "Zephyr", developer: "Hugging Face", url: "https://huggingface.co/HuggingFaceH4/zephyr", description: "Fine-tuned language model for helpfulness", category: "Text / NLP", pricing: "Free", tags: ["open-source", "text"], free_alternative: "" },
  { name: "Bloom", developer: "BigScience", url: "https://huggingface.co/bigscience/bloom", description: "Multilingual large language model", category: "Text / NLP", pricing: "Free", tags: ["open-source", "multilingual"], free_alternative: "" },
  { name: "Yi-Large", developer: "01.AI", url: "https://01.ai", description: "Powerful Chinese and English language model", category: "Text / NLP", pricing: "Freemium", tags: ["multilingual", "text"], free_alternative: "" },
  { name: "DeepSeek-Coder", developer: "DeepSeek", url: "https://huggingface.co/deepseek-ai", description: "Specialized model for code generation", category: "Text / NLP", pricing: "Free", tags: ["code", "open-source"], free_alternative: "" },
  { name: "ChatGLM3", developer: "Tsinghua", url: "https://github.com/THUDM/ChatGLM3", description: "Bilingual conversational language model", category: "Text / NLP", pricing: "Free", tags: ["open-source", "multilingual"], free_alternative: "" },
  { name: "Orca 2", developer: "Microsoft", url: "https://www.microsoft.com/en-us/research/project/orca", description: "Reasoning-focused language model", category: "Text / NLP", pricing: "Free", tags: ["research", "reasoning"], free_alternative: "" },
  { name: "Dolly v2", developer: "Databricks", url: "https://huggingface.co/databricks/dolly-v2-12b", description: "Open source instruction-following model", category: "Text / NLP", pricing: "Free", tags: ["open-source", "text"], free_alternative: "" },
  { name: "Phi-3 Mini", developer: "Microsoft", url: "https://huggingface.co/microsoft/phi-3-mini", description: "Small but capable language model", category: "Text / NLP", pricing: "Free", tags: ["efficient", "open-source"], free_alternative: "" },
  { name: "T5", developer: "Google", url: "https://huggingface.co/t5", description: "Text-to-text transfer transformer", category: "Text / NLP", pricing: "Free", tags: ["open-source", "research"], free_alternative: "" },
  
  // Code
  { name: "GitHub Copilot", developer: "GitHub", url: "https://github.com/features/copilot", description: "AI pair programmer that suggests code completions", category: "Code", pricing: "Paid", tags: ["code", "autocomplete"], free_alternative: "Tabnine" },
  { name: "Replit Code LLM", developer: "Replit", url: "https://replit.com/site/ai", description: "AI-powered code generation and completion", category: "Code", pricing: "Freemium", tags: ["code", "ide"], free_alternative: "" },
  { name: "Code Llama", developer: "Meta", url: "https://ai.meta.com/llama", description: "Open source code generation model", category: "Code", pricing: "Free", tags: ["code", "open-source"], free_alternative: "" },
  { name: "Claude Code", developer: "Anthropic", url: "https://claude.ai", description: "Code-aware version of Claude", category: "Code", pricing: "Freemium", tags: ["code", "chat"], free_alternative: "" },
  { name: "OpenAI o1-mini", developer: "OpenAI", url: "https://openai.com", description: "Reasoning model optimized for code", category: "Code", pricing: "Paid", tags: ["code", "reasoning"], free_alternative: "Code Llama" },
  { name: "StarCoder2", developer: "BigCode", url: "https://huggingface.co/bigcode", description: "Open source code generation model", category: "Code", pricing: "Free", tags: ["code", "open-source"], free_alternative: "" },
  { name: "AlphaCode 2", developer: "DeepMind", url: "https://deepmind.google/discover/alphacode", description: "AI system for competitive programming", category: "Code", pricing: "Free", tags: ["code", "research"], free_alternative: "" },
  { name: "Tabnine", developer: "Tabnine", url: "https://www.tabnine.com", description: "AI code completion tool", category: "Code", pricing: "Freemium", tags: ["code", "autocomplete"], free_alternative: "" },
  { name: "Amazon CodeWhisperer", developer: "Amazon", url: "https://aws.amazon.com/codewhisperer", description: "AI coding companion from AWS", category: "Code", pricing: "Free", tags: ["code", "aws"], free_alternative: "" },
  { name: "Polycoder", developer: "CMU", url: "https://huggingface.co/NinedayWang/PolyCoder", description: "Open source code generation model", category: "Code", pricing: "Free", tags: ["code", "open-source"], free_alternative: "" },
  
  // Image
  { name: "DALL·E 3", developer: "OpenAI", url: "https://openai.com/dall-e-3", description: "Advanced AI image generation with precise prompts", category: "Image", pricing: "Paid", tags: ["image", "creative"], free_alternative: "Craiyon" },
  { name: "Midjourney", developer: "Midjourney", url: "https://www.midjourney.com", description: "Artistic AI image generation", category: "Image", pricing: "Paid", tags: ["image", "art"], free_alternative: "Stable Diffusion XL" },
  { name: "Stable Diffusion XL", developer: "Stability AI", url: "https://stability.ai", description: "Open source text-to-image model", category: "Image", pricing: "Free", tags: ["image", "open-source"], free_alternative: "" },
  { name: "Leonardo AI", developer: "Leonardo", url: "https://leonardo.ai", description: "AI image generation for creative projects", category: "Image", pricing: "Freemium", tags: ["image", "creative"], free_alternative: "" },
  { name: "Ideogram", developer: "Ideogram", url: "https://ideogram.ai", description: "Text-to-image with accurate text rendering", category: "Image", pricing: "Freemium", tags: ["image", "text"], free_alternative: "" },
  { name: "Playground v2", developer: "Playground", url: "https://playground.com", description: "AI image generation and editing", category: "Image", pricing: "Freemium", tags: ["image", "editing"], free_alternative: "" },
  { name: "Adobe Firefly", developer: "Adobe", url: "https://firefly.adobe.com", description: "AI image generation integrated with Adobe suite", category: "Image", pricing: "Freemium", tags: ["image", "enterprise"], free_alternative: "" },
  { name: "Runway Gen-2", developer: "Runway", url: "https://runwayml.com", description: "AI image and video generation", category: "Image", pricing: "Paid", tags: ["image", "video"], free_alternative: "Stable Diffusion XL" },
  { name: "DreamStudio", developer: "Stability AI", url: "https://dreamstudio.ai", description: "User-friendly interface for Stable Diffusion", category: "Image", pricing: "Freemium", tags: ["image", "stable-diffusion"], free_alternative: "" },
  { name: "Craiyon", developer: "Craiyon", url: "https://www.craiyon.com", description: "Free AI image generator", category: "Image", pricing: "Free", tags: ["image", "simple"], free_alternative: "" },
  { name: "BlueWillow", developer: "BlueWillow", url: "https://bluewillow.ai", description: "Free AI image generation", category: "Image", pricing: "Free", tags: ["image", "discord"], free_alternative: "" },
  { name: "Mage.space", developer: "Mage", url: "https://www.mage.space", description: "Free Stable Diffusion platform", category: "Image", pricing: "Free", tags: ["image", "stable-diffusion"], free_alternative: "" },
  { name: "Pollinations AI", developer: "Pollinations", url: "https://pollinations.ai", description: "Open source AI media generation", category: "Image", pricing: "Free", tags: ["image", "open-source"], free_alternative: "" },
  { name: "Fotor AI", developer: "Fotor", url: "https://www.fotor.com/features/ai", description: "AI-powered photo editing and generation", category: "Image", pricing: "Freemium", tags: ["image", "editing"], free_alternative: "" },
  { name: "Bing Image Creator", developer: "Microsoft", url: "https://www.bing.com/images/create", description: "Free DALL-E powered image generation", category: "Image", pricing: "Free", tags: ["image", "dall-e"], free_alternative: "" },
  
  // Audio
  { name: "Suno AI", developer: "Suno", url: "https://suno.ai", description: "AI music and song generation", category: "Audio", pricing: "Freemium", tags: ["music", "audio"], free_alternative: "" },
  { name: "Udio", developer: "Udio", url: "https://www.udio.com", description: "AI music creation platform", category: "Audio", pricing: "Freemium", tags: ["music", "audio"], free_alternative: "" },
  { name: "ElevenLabs", developer: "ElevenLabs", url: "https://elevenlabs.io", description: "AI voice generation and cloning", category: "Audio", pricing: "Freemium", tags: ["voice", "tts"], free_alternative: "" },
  { name: "Play.ht", developer: "Play.ht", url: "https://play.ht", description: "AI text-to-speech platform", category: "Audio", pricing: "Freemium", tags: ["voice", "tts"], free_alternative: "" },
  { name: "Murf AI", developer: "Murf", url: "https://murf.ai", description: "AI voiceover generation", category: "Audio", pricing: "Paid", tags: ["voice", "tts"], free_alternative: "Coqui TTS" },
  { name: "Coqui TTS", developer: "Coqui", url: "https://coqui.ai", description: "Open source text-to-speech", category: "Audio", pricing: "Free", tags: ["voice", "open-source"], free_alternative: "" },
  { name: "Whisper", developer: "OpenAI", url: "https://openai.com/research/whisper", description: "Automatic speech recognition model", category: "Audio", pricing: "Free", tags: ["transcription", "open-source"], free_alternative: "" },
  { name: "Descript", developer: "Descript", url: "https://www.descript.com", description: "AI audio and video editing", category: "Audio", pricing: "Freemium", tags: ["editing", "transcription"], free_alternative: "" },
  { name: "Cleanvoice AI", developer: "Cleanvoice", url: "https://cleanvoice.ai", description: "AI podcast editing", category: "Audio", pricing: "Paid", tags: ["editing", "podcast"], free_alternative: "Descript" },
  
  // Video
  { name: "Pika Labs", developer: "Pika", url: "https://pika.art", description: "AI video generation from text and images", category: "Video", pricing: "Freemium", tags: ["video", "creative"], free_alternative: "" },
  { name: "Synthesia", developer: "Synthesia", url: "https://www.synthesia.io", description: "AI video generation with avatars", category: "Video", pricing: "Paid", tags: ["video", "avatar"], free_alternative: "HeyGen" },
  { name: "Runway Gen-2 Video", developer: "Runway", url: "https://runwayml.com", description: "Text and image to video generation", category: "Video", pricing: "Paid", tags: ["video", "creative"], free_alternative: "Pika Labs" },
  { name: "Veed.io", developer: "Veed", url: "https://www.veed.io", description: "AI video editing platform", category: "Video", pricing: "Freemium", tags: ["video", "editing"], free_alternative: "" },
  { name: "DeepBrain AI", developer: "DeepBrain", url: "https://www.deepbrain.io", description: "AI video synthesis with avatars", category: "Video", pricing: "Paid", tags: ["video", "avatar"], free_alternative: "Veed.io" },
  { name: "Colossyan", developer: "Colossyan", url: "https://www.colossyan.com", description: "AI video creation for learning", category: "Video", pricing: "Paid", tags: ["video", "education"], free_alternative: "Lumen5" },
  { name: "HeyGen", developer: "HeyGen", url: "https://www.heygen.com", description: "AI video generation with realistic avatars", category: "Video", pricing: "Freemium", tags: ["video", "avatar"], free_alternative: "" },
  { name: "Lumen5", developer: "Lumen5", url: "https://lumen5.com", description: "AI video creation from text", category: "Video", pricing: "Freemium", tags: ["video", "marketing"], free_alternative: "" },
  
  // Multimodal/Agents
  { name: "Perplexity AI", developer: "Perplexity", url: "https://www.perplexity.ai", description: "AI-powered search and research assistant", category: "Multimodal", pricing: "Freemium", tags: ["search", "research"], free_alternative: "" },
  { name: "HuggingChat", developer: "Hugging Face", url: "https://huggingface.co/chat", description: "Open source AI chat interface", category: "Multimodal", pricing: "Free", tags: ["chat", "open-source"], free_alternative: "" },
  { name: "Meta AI", developer: "Meta", url: "https://www.meta.ai", description: "Meta's AI assistant", category: "Multimodal", pricing: "Free", tags: ["chat", "assistant"], free_alternative: "" },
  { name: "Poe by Quora", developer: "Quora", url: "https://poe.com", description: "Platform for multiple AI chatbots", category: "Multimodal", pricing: "Freemium", tags: ["chat", "multi-model"], free_alternative: "" },
  { name: "AgentGPT", developer: "Reworkd", url: "https://agentgpt.reworkd.ai", description: "Autonomous AI agents for tasks", category: "Multimodal", pricing: "Free", tags: ["agent", "automation"], free_alternative: "" },
  { name: "AutoGPT", developer: "Torantulino", url: "https://github.com/Torantulino/Auto-GPT", description: "Autonomous GPT-4 agent", category: "Multimodal", pricing: "Free", tags: ["agent", "open-source"], free_alternative: "" },
  { name: "BabyAGI", developer: "Yohei", url: "https://github.com/yoheinakajima/babyagi", description: "Task-driven autonomous agent", category: "Multimodal", pricing: "Free", tags: ["agent", "open-source"], free_alternative: "" },
  { name: "Ollama", developer: "Ollama", url: "https://ollama.ai", description: "Run large language models locally", category: "Multimodal", pricing: "Free", tags: ["local", "open-source"], free_alternative: "" },
  { name: "OpenRouter", developer: "OpenRouter", url: "https://openrouter.ai", description: "Unified API for multiple AI models", category: "Multimodal", pricing: "Paid", tags: ["api", "multi-model"], free_alternative: "Ollama" },
  
  // Data/Analytics
  { name: "ChatData", developer: "ChatData", url: "https://chatdata.ai", description: "AI chatbot trained on your data", category: "Data", pricing: "Paid", tags: ["data", "chatbot"], free_alternative: "Obviously AI" },
  { name: "Akkio", developer: "Akkio", url: "https://www.akkio.com", description: "AI for business analytics", category: "Data", pricing: "Paid", tags: ["analytics", "business"], free_alternative: "Obviously AI" },
  { name: "Obviously AI", developer: "Obviously AI", url: "https://www.obviously.ai", description: "No-code AI for data predictions", category: "Data", pricing: "Freemium", tags: ["analytics", "no-code"], free_alternative: "" },
  { name: "DataRobot", developer: "DataRobot", url: "https://www.datarobot.com", description: "Enterprise AI platform", category: "Data", pricing: "Paid", tags: ["enterprise", "analytics"], free_alternative: "Obviously AI" },
  { name: "MonkeyLearn", developer: "MonkeyLearn", url: "https://monkeylearn.com", description: "Text analysis with machine learning", category: "Data", pricing: "Freemium", tags: ["text", "analytics"], free_alternative: "" },
  { name: "Tableau AI", developer: "Tableau", url: "https://www.tableau.com", description: "AI-powered data visualization", category: "Data", pricing: "Paid", tags: ["visualization", "analytics"], free_alternative: "Obviously AI" },
  
  // Design/Creative
  { name: "Canva Magic Studio", developer: "Canva", url: "https://www.canva.com/magic", description: "AI-powered design tools in Canva", category: "Design", pricing: "Freemium", tags: ["design", "creative"], free_alternative: "" },
  { name: "Figma AI", developer: "Figma", url: "https://www.figma.com/ai", description: "AI features in Figma design tool", category: "Design", pricing: "Freemium", tags: ["design", "ui-ux"], free_alternative: "" },
  { name: "Uizard", developer: "Uizard", url: "https://uizard.io", description: "AI-powered UI design tool", category: "Design", pricing: "Freemium", tags: ["design", "ui-ux"], free_alternative: "" },
  { name: "KREA", developer: "KREA", url: "https://www.krea.ai", description: "AI image generation and editing", category: "Design", pricing: "Freemium", tags: ["design", "image"], free_alternative: "" },
  { name: "Designs.ai", developer: "Designs.ai", url: "https://designs.ai", description: "AI-powered creative suite", category: "Design", pricing: "Paid", tags: ["design", "suite"], free_alternative: "Canva Magic Studio" },
  { name: "Clipdrop", developer: "Clipdrop", url: "https://clipdrop.co", description: "AI image editing tools", category: "Design", pricing: "Freemium", tags: ["image", "editing"], free_alternative: "" },
  { name: "Lensa", developer: "Prisma", url: "https://prisma-ai.com/lensa", description: "AI photo and portrait editor", category: "Design", pricing: "Paid", tags: ["photo", "editing"], free_alternative: "Remove.bg" },
  { name: "Remove.bg", developer: "Remove.bg", url: "https://www.remove.bg", description: "AI background removal", category: "Design", pricing: "Freemium", tags: ["image", "editing"], free_alternative: "" },
  
  // Research/Open Source
  { name: "Hugging Face Hub", developer: "Hugging Face", url: "https://huggingface.co/models", description: "Platform for AI models and datasets", category: "Research", pricing: "Free", tags: ["platform", "open-source"], free_alternative: "" },
  { name: "Replicate", developer: "Replicate", url: "https://replicate.com", description: "Run and deploy AI models", category: "Research", pricing: "Paid", tags: ["platform", "api"], free_alternative: "Hugging Face Hub" },
  { name: "LM Studio", developer: "LM Studio", url: "https://lmstudio.ai", description: "Desktop app for running LLMs locally", category: "Research", pricing: "Free", tags: ["local", "desktop"], free_alternative: "" },
  { name: "KoboldCpp", developer: "LostRuins", url: "https://github.com/LostRuins/koboldcpp", description: "Easy local LLM inference", category: "Research", pricing: "Free", tags: ["local", "open-source"], free_alternative: "" },
  { name: "Jan AI", developer: "Jan", url: "https://jan.ai", description: "Open source ChatGPT alternative", category: "Research", pricing: "Free", tags: ["local", "open-source"], free_alternative: "" },
  { name: "TextGen WebUI", developer: "oobabooga", url: "https://github.com/oobabooga/text-generation-webui", description: "Web UI for running LLMs", category: "Research", pricing: "Free", tags: ["local", "open-source"], free_alternative: "" },
  
  // Gaming
  { name: "Inworld AI", developer: "Inworld", url: "https://www.inworld.ai", description: "AI NPCs for games", category: "Game", pricing: "Paid", tags: ["gaming", "npc"], free_alternative: "AI Dungeon" },
  { name: "Scenario", developer: "Scenario", url: "https://www.scenario.com", description: "AI game asset generation", category: "Game", pricing: "Freemium", tags: ["gaming", "assets"], free_alternative: "" },
  { name: "AI Dungeon", developer: "Latitude", url: "https://play.aidungeon.io", description: "AI-powered text adventure game", category: "Game", pricing: "Freemium", tags: ["gaming", "text"], free_alternative: "" },
  
  // Additional models to reach 100+
  { name: "Jasper AI", developer: "Jasper", url: "https://www.jasper.ai", description: "AI content creation for marketing", category: "Text / NLP", pricing: "Paid", tags: ["content", "marketing"], free_alternative: "ChatGPT" },
  { name: "Copy.ai", developer: "Copy.ai", url: "https://www.copy.ai", description: "AI copywriting assistant", category: "Text / NLP", pricing: "Freemium", tags: ["content", "marketing"], free_alternative: "" },
  { name: "Writesonic", developer: "Writesonic", url: "https://writesonic.com", description: "AI writing and content generation", category: "Text / NLP", pricing: "Freemium", tags: ["content", "writing"], free_alternative: "" },
  { name: "Grammarly AI", developer: "Grammarly", url: "https://www.grammarly.com", description: "AI writing assistant and editor", category: "Text / NLP", pricing: "Freemium", tags: ["writing", "editing"], free_alternative: "" },
  { name: "QuillBot", developer: "QuillBot", url: "https://quillbot.com", description: "AI paraphrasing and writing tool", category: "Text / NLP", pricing: "Freemium", tags: ["writing", "paraphrasing"], free_alternative: "" },
  { name: "Notion AI", developer: "Notion", url: "https://www.notion.so/product/ai", description: "AI assistant integrated in Notion", category: "Text / NLP", pricing: "Paid", tags: ["productivity", "writing"], free_alternative: "ChatGPT" },
  { name: "Character.AI", developer: "Character.AI", url: "https://character.ai", description: "Conversational AI characters", category: "Text / NLP", pricing: "Free", tags: ["chat", "roleplay"], free_alternative: "" },
  { name: "Anthropic Claude Instant", developer: "Anthropic", url: "https://claude.ai", description: "Faster, lighter version of Claude", category: "Text / NLP", pricing: "Freemium", tags: ["chat", "fast"], free_alternative: "" },
  { name: "Codeium", developer: "Codeium", url: "https://codeium.com", description: "Free AI code completion", category: "Code", pricing: "Free", tags: ["code", "autocomplete"], free_alternative: "" },
  { name: "Cursor", developer: "Cursor", url: "https://cursor.sh", description: "AI-first code editor", category: "Code", pricing: "Freemium", tags: ["code", "editor"], free_alternative: "" },
  { name: "Artbreeder", developer: "Artbreeder", url: "https://www.artbreeder.com", description: "Collaborative AI art creation", category: "Image", pricing: "Freemium", tags: ["image", "art"], free_alternative: "" },
  { name: "NightCafe", developer: "NightCafe", url: "https://nightcafe.studio", description: "AI art generator with multiple algorithms", category: "Image", pricing: "Freemium", tags: ["image", "art"], free_alternative: "" },
  { name: "Deep Dream Generator", developer: "Deep Dream", url: "https://deepdreamgenerator.com", description: "AI art using deep neural networks", category: "Image", pricing: "Freemium", tags: ["image", "art"], free_alternative: "" },
  { name: "Wombo Dream", developer: "Wombo", url: "https://www.wombo.art", description: "Mobile-first AI art generation", category: "Image", pricing: "Free", tags: ["image", "mobile"], free_alternative: "" }
];

export const categories = [
  "All",
  "Text / NLP",
  "Code",
  "Image",
  "Audio",
  "Video",
  "Multimodal",
  "Data",
  "Design",
  "Research",
  "Game"
];

export const pricingOptions = [
  "All",
  "Free",
  "Freemium",
  "Paid"
];

export const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Team Member",
    bio: "Full-stack developer passionate about AI and building tools that make technology accessible to everyone.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
  },
  {
    name: "Dr. Sarah Williams",
    role: "Guidance Professor",
    bio: "Professor of Computer Science specializing in artificial intelligence and machine learning with 15+ years of research experience.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  }
];
