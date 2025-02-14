# Open Development Blog - Febuary 2025
by Lucas Ferguson, CS + Cybersecurity Student @ Illinois Institute of Technology 
## Introduction
**My AI Adventures and the Latest Innovations**
As we continue through 2025, the world of artificial intelligence continues to evolve at a breakneck pace. This year has already been packed with exciting developments, from groundbreaking AI tools to major tech announcements. While the industry is buzzing with innovation, I’ve also been diving deep into my own AI experiments at home, exploring how these tools can enhance productivity and creativity. Here’s a look at what’s new in AI this month and how I’ve been putting it all to use.
## 2. Major AI News  
Here is a quick list of big news already this year!

**Corporate AI Race**  
- **DeepSeek** challenges U.S. dominance with open-source models rivaling GPT-4 and DALL-E 3 at 5% cost, triggering a $600B NVDA stock drop.
- **Meta** [commits $65B to AI infrastructure, including Louisiana data center supporting 1.8 exaflops](https://www.nytimes.com/2025/01/24/technology/meta-data-center.html)
- **Microsoft Copilot** achieves [700% ROI in manufacturing sector](https://news.microsoft.com/en-cee/2025/01/08/6-ai-trends-youll-see-more-of-in-2025/) through agentic workflow automation
- **Oracle-SoftBank** [$500B Stargate Project](https://www.nytimes.com/2025/01/21/technology/trump-openai-stargate-artificial-intelligence.html) begins Nevada data center construction

**Dev Tool Updates**  
- **GitHub Copilot** (Jan 2025) introduced [free tier access in Visual Studio](https://devblogs.microsoft.com/visualstudio/announcing-a-free-github-copilot-for-visual-studio/)
- **Visual Studio** (Jan 2025) Along with the above, Copilot now features multi-file editing. Super powerful for making edits to both an API and the code that calls it at the same time.
- **Cursor 0.45** (Jan 2025) launched [repository-level .cursor/rules configurations](https://www.cursor.com/changelog/-cursor-rules-better-codebase-understanding-new-tab-model), letting teams enforce coding standards and backend architecture rules through AI-driven code reviews.
- **Figma AI** (Jan 2025) expanded [design-to-code workflows](https://theinfluenceagency.com/blog/figma-new-features-2025), translating UI layers into production-ready React components with auto-generated accessibility attributes and mobile breakpoints – a game-changer for frontend teams.
- **Figma Slides** (Jan 2025) introduced live prototype embeds, enabling frontend teams to showcase interactive UI demos directly within presentation decks during stakeholder reviews.  

**Government & Policy Updates**  

| Initiative                                                                                                         | Impact                                                             | Timeline                   |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ | -------------------------- |
| [Trump's Executive Order 14100](https://www.nytimes.com/2019/02/11/business/ai-artificial-intelligence-trump.html) | Replaces previous AI ethics guidelines with innovation-first ideas | Effective 1/20/2025        |
| [UNESCO Ethics Framework](https://www.unesco.org/en/artificial-intelligence/recommendation-ethics)                 | Adopted by 38 nations for AI governance                            | Ratified 2/1/2025          |
| [Colorado AI Act](https://www.nytimes.com/2024/06/10/technology/california-ai-regulation.html)                     | Mandates algorithmic audits for high-risk systems                  | Enforcement begins Q3 2025 |

**Ethics Corner**  
- **Anthropic's Citation API** reduces AI hallucinations by 67% through source attribution requirements 
- **Notre Dame-IBM Lab** awards $345K for ethical AI workforce augmentation research 
- **EU AI Act** fines reach $280M in first month of enforcement, primarily targeting biased HR algorithms
- **SEF 2025** keynote warns AI will surpass human brain capacity by 2029 without ethical safeguards

In the following section I've selected three of the above topics to cover in more detail.
## 3. Featured News

### 3.1 DeepSeek-V3: Redefining Open-Source AI Efficiency

China's DeepSeek continues to challenge proprietary AI dominance with its latest open-source marvel, achieving unprecedented performance-to-cost ratios while maintaining commercial usability. The V3 architecture demonstrates how focused engineering can overcome hardware limitations:

| Specification          | 2024 (DeepSeek-V2) | 2025 (DeepSeek-V3) | Improvement |
|------------------------|--------------------|--------------------|-------------|
| Total Parameters       | 371B               | 671B               | 80% ↑       |
| Training Data          | 5.8T tokens        | 14.8T tokens       | 155% ↑      |
| MMLU Benchmark         | 82.3%              | 88.5%              | 7.5% ↑      |
| Inference Speed        | 20 tokens/sec      | 60 tokens/sec      | 3x ↑        |
| Training Efficiency    | 8.1M GPU-hours     | 2.788M GPU-hours   | 65% ↓       |
| API Cost per 1M tokens | $0.50             | $0.18             | 64% ↓       |

The V3 model introduces three [breakthrough innovations](https://www.infoq.com/news/2025/01/deepseek-v3-llm/):  
1. **DualPipe Parallelism** - Reduces cross-node communication overhead through SM-based data forwarding, achieving 92% hardware utilization efficiency  
2. **Auxiliary-Loss-Free Routing** - Maintains expert specialization without traditional balancing penalties, improving task accuracy by 18%  
3. **FP8 Microscaling** - Combines 4-bit exponents with 3-bit mantissas for stable low-precision training, cutting memory usage by 40%  

DeepSeek's open-source strategy now pressures major players. Developers [praise the MIT license's commercial flexibility](https://hackaday.com/2025/01/27/new-open-source-deepseek-v3-language-model-making-waves/), especially us here at Open Code Development!

Here's a comprehensive breakdown of DeepSeek model parameters across versions, incorporating both base and distilled models:

**1. DeepSeek-R1 Series**  

| Model Variant        | Total Parameters | Activated/Task Parameters | Architecture       |
| -------------------- | ---------------- | ------------------------- | ------------------ |
| R1 (Full)            | 671B             | 37B per token             | Mixture of Experts |
| R1-Distill-Qwen-1.5B | 1.5B             | Full model                | Dense              |
| R1-Distill-Qwen-7B   | 7B               | Full model                | Dense              |
| R1-Distill-Qwen-14B  | 14B              | Full model                | Dense              |
| R1-Distill-Qwen-32B  | 32B              | Full model                | Dense              |
| R1-Distill-Llama-8B  | 8B               | Full model                | Dense              |
| R1-Distill-Llama-70B | 70B              | Full model                | Dense              |

**2. DeepSeek-V2 Series**  

| Model Variant | Total Parameters | Activated/Task Parameters | Architecture       |
| ------------- | ---------------- | ------------------------- | ------------------ |
| V2            | 236B             | 21B per token             | Mixture of Experts |
| V2.5          | 238B             | 16B per token             | Mixture of Experts |
| Coder-V2-Base | 16B              | 2.4B per token            | Mixture of Experts |
| Coder-V2      | 236B             | 21B per token             | Mixture of Experts |

**3. DeepSeek-V3 Series**  

| Model Variant | Total Parameters | Activated/Task Parameters | Architecture                              |
| ------------- | ---------------- | ------------------------- | ----------------------------------------- |
| V3            | 671B             | 37B per token             | Mixture of Experts                        |
| V3-Base       | 685B*            | 37B per token             | Mixture of Experts+Multi-Token Prediction |

**General Hardware Requirements** for running these with Ollama:  
- 1.5B: Runs on laptops (4GB RAM)  
- 7B-32B: Consumer GPUs (16-80GB VRAM)  
- 236B+: Multi-GPU clusters 

### 3.2 Samsung Unpacked: A Power User’s Dream

Samsung’s Galaxy Unpacked event this past January was one of the highlights of the month for me. The new Galaxy S25 series unveiled some incredible AI-powered features that cater specifically to power users like myself. As someone who relies heavily on Google Calendar for organization, my favorite feature is Gemini assistant’s ability to create multiple calendar events or tasks based on research it is able to do.

For example, you can ask Gemini to add all your favorite sports team’s games to your calendar automatically! This kind of natural language integration takes productivity to a whole new level and feels like a glimpse into the future of digital assistants.

#### 3.2.1 Local AI Processing with Qualcomm Snapdragon® 8 Elite
Another standout aspect of the Galaxy S25 series is Samsung’s focus on **local processing** for many AI features. Features like natural language search in the Gallery app, suggested routines, and even audio erasing run directly on the device without needing cloud connectivity. This emphasis on privacy and speed is a refreshing change in an era where many companies rely heavily on cloud-based solutions.

For power users who need more advanced capabilities, Samsung has also introduced tools like "AI Select," which lets you summarize articles or generate creative content without leaving your current app. Combined with local processing capabilities, these features make the Galaxy S25 series one of the most innovative smartphones on the market today.

#### 3.2.2 AI Features: Local vs. Cloud Processing

Here’s a breakdown of which Galaxy S25 features run locally versus those that require cloud connectivity:

| **Feature**                       | **Runs Locally** | **Requires Cloud**          |
|-----------------------------------|------------------|-----------------------------|
| Natural Language Search (Gallery) | Yes              | No                          |
| Suggested Routines                | Yes              | No                          |
| Now Brief                         | Yes              | No                          |
| AI Select                         | Yes              | No                          |
| Audio Eraser                      | Yes              | No                          |
| Writing Assistance (Auto Format)  | Partial          | Partial                     |
| Drawing Assist                    | No               | Yes                         |
| Sticker Generation                | No               | Yes                         |
| Gemini Live                       | No               | Yes                         |
| Cross-App Action                  | No               | Yes                         |

## 4.0 Projects

### 4.1 Experimenting with DeepSeek on My Home Lab

One of my favorite recent projects has been running DeepSeek’s AI models on my home lab servers. My current server is powered by a six-year-old Intel i5 CPU, 20 GB of RAM, and a solid-state drive with plenty of storage space. Despite these limited resources, I’ve been amazed at how well it handles DeepSeek’s 1.5 billion parameter model. The performance is decent, and the output is somewhat accurate. The lack of accuracy definitely lends it more to creative tasks like brainstorming ideas, planning projects, or game development.

I also tested DeepSeek’s larger 7 billion parameter model. While the quality of its responses is noticeably better, offering richer and more nuanced insights, it runs slower than I’d prefer on my current hardware. Still, the fact that I can run such advanced models locally is a testament to how far AI optimization has come.
### 4.2 AI-Powered Knowledge Retrieval System

Another exciting project I’ve been working on involves enhancing my note-taking workflow using AI. I use Obsidian to organize my academic notes across topics like operating systems, machine learning, augmented reality, and Flutter development. To take this system to the next level, I’ve developed a process that embeds all my notes into a vector database hosted on the same server.

Using Qdrant, a powerful open-source vector database, I can now perform semantic searches across my notes. For example, if I’m studying augmented reality frameworks, I can query the database for related notes on machine learning techniques that enhance AR experiences. This setup has made it incredibly easy to uncover connections between concepts and retrieve relevant information instantly.

The combination of DeepSeek’s local processing capabilities and Qdrant’s efficient search functionality has completely transformed how I manage knowledge. It’s not just about storing information anymore, it’s about making it actionable and accessible in ways that save time and spark new ideas.

### 4.3 Discovering Dify: Simplifying AI Workflows

This month, I also explored Dify, an open-source platform designed to make building generative AI applications easier than ever. Dify allows users to create complex workflows without writing code by visually connecting components in its Orchestration Studio. Whether you’re building simple agents or crafting intricate pipelines for Retrieval-Augmented Generation (RAG), Dify provides an intuitive interface that lowers the barrier to entry for AI development. With its recent updates focusing on production readiness and scalability, Dify is quickly becoming a favorite among developers and non-developers alike.
## 5.0 Conclusion

This month has reaffirmed how transformative AI can be, not just at an industry level but also in personal workflows. From running advanced models like DeepSeek in my home lab to integrating Qdrant into my note-taking system and exploring tools like Dify, it’s clear that AI is becoming more accessible than ever.

Samsung’s focus on empowering power users with locally processed features while leveraging cloud capabilities for more demanding tasks shows how companies are listening to user needs for privacy and performance. As someone who thrives on productivity tools like Google Calendar, seeing these innovations firsthand has been incredibly inspiring. As we move further into 2025, I’m excited to see how these technologies continue to evolve!

Thanks for reading my article!

If you want to learn more about me and the projects I'm working on be sure to check out my website at lucasferguson.net 
