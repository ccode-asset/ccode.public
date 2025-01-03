
There is no doubt about how LLMs have transformed the way we work. Their applications are vast, ranging from customer support to creative writing. Their capability to generate human-like texts has made them invaluable in modern technology. This left us wondering whether we can incorporate their capabilities into our work process. And, the answer was yes we can. To manage and communicate effectively with our community we use Discord as the platform for communication. We also have a bot to manage the roles and onboarding of new members. The initial idea is to create an agentic discord bot that will be able to help the server members with common issues they face when they start contributing with us.

Thus, with the north star in mind, we started exploring the possibilities. Soon we found that LLMs are great at generating human-like text that can help people. But they lack reliability and effectiveness. They sometimes hallucinate to generate a de facto response but in the pursuit of doing so, they generate incorrect information. And that is a major problem for us as incorrect debugging steps can lead to severe consequences. Not only that but sometimes the information on which the model was trained can become outdated as the tech world evolves fast. Also, the context window of each model is finite and that can be a problem if the model has to use a lot of information to process something.

But there's mostly light at the end of the tunnel. We found some solutions to these problems along with 2 interesting case studies from Harvard. In this inaugural blog let’s dive into these topics. Let’s start with the problem descriptions first.

# Problems Faced by Large Language Models

## Hallucinations: A Major Concern

One of the most pressing issues of any LLM is hallucinations, where models generate content that is irrelevant or fabricated. This happens mainly because the model has no understanding of the sources it is referring to. The model treats every source equally. In reality, some sources are trustworthy while others are not. This phenomenon is particularly concerning in sensitive fields like law and medicine, where accuracy is essential.

The causes of hallucinations are multifaceted:

- Data Quality: LLMs are trained on extensive datasets that may contain inaccuracies or biases. If flawed sources are included in training data, the model may inadvertently reproduce these errors as the model can not differentiate between trustworthy and untrustworthy sources.

- Model Architecture: The architecture of LLMs often lacks mechanisms to differentiate between credible and non-credible sources, treating all input data equally. This happens because they do not know which source to trust and which source to not trust. Consequently, an opinion from a reputable source may carry the same weight as unverified information.

- Inference Limitations: During inference, LLMs may produce hallucinations due to unclear prompts or insufficient context attention. For instance, if a prompt lacks clarity or context of a situation, the model might generate irrelevant or nonsensical responses.

## Context Window Limitations

Another significant challenge is the limited context windows of most LLMs. These models can only process a fixed number of tokens from previous interactions, which constrains their ability to maintain coherence over longer conversations or analyze complex documents. So, when someone is engaging with an LLM for a longer period. The model will gradually forget the initial interactions as the working memory is very limited for the model and it is set by the architecture of the model.

This limitation can lead to:

- Misinterpretation of Prompts: Without sufficient context, LLMs may misinterpret user inputs or generate responses that do not align with the user's intent. Imagine asking a chatbot to recommend a book, but you forget to specify the genre. It might suggest something random—like a cookbook when you wanted a sci-fi novel—because it didn’t have enough context to work with.

- Inconsistency in Responses: As conversations progress, the inability to reference prior exchanges can lead to inconsistencies in responses. Say you have told the bot you want Pluto to become a planet again because you like the name and some other information. Then after some discussion, you again ask the bot to write a presentation on “Why I want Pluto to become a planet.”. The bot will most likely forget the actual reasons as the conversation gets older and goes out of the context token window.

# Solutions of Hallucination - RAG, RIG & GraphRAG

Retrieval-Augmented Generation (RAG), Retrieval Interleaved Generation (RIG), and GraphRAG have emerged as techniques that enhance the capabilities of large language models (LLMs). These approaches integrate external knowledge into AI systems. So we provide cheat sheets or reference materials to the model to help it generate relevant information. And we know that the responses will be grounded in authoritative data sources.

## Retrieval-Augmented Generation (RAG)

Retrieval-Augmented Generation (RAG) combines the generative capabilities of LLMs with robust information retrieval mechanisms, RAG allows AI systems to produce responses that are accurate and informed by up-to-date knowledge.

### The RAG Process

The RAG process involves several critical stages:

1. Data Preparation: Initially, data is prepared and indexed into numerical representations known as embeddings. These embeddings facilitate the efficient retrieval of relevant information.

2. Query Submission: When a user submits a query, the system retrieves apposite documents from a knowledge base using these embeddings. This retrieval phase ensures that the LLM has access to the most relevant information before generating a response.

3. Augmented Prompt Creation: The retrieved data is then combined with the original query to create an augmented prompt. This prompt guides the LLM in crafting a more accurate and context-aware answer.

## Retrieval Interleaved Generation (RIG)

Building on the foundation laid by RAG, Retrieval Interleaved Generation (RIG) represents an evolution in natural language processing by dynamically integrating real-time data retrieval into the response generation process. Unlike traditional methods like RAG, which perform retrieval before generating responses, RIG interleaves these steps, allowing AI models to continuously access and incorporate external information while formulating answers.

### The RIG Process

The RIG process unfolds as follows:

1. Initial Response Generation: The model begins by generating an initial response based on the user's query.

2. Gap Identification: As it constructs this response, the model identifies gaps in knowledge or areas needing clarification.

3. Iterative Data Retrieval: At this point, it retrieves relevant data from external sources multiple times during the generation process. This iterative approach ensures that the information is not only current but also contextually relevant.

![RAG vs RIG](https://miro.medium.com/v2/resize:fit:1078/1*5f1lWY3CEuF8bH2Y4RNW2w.png)

## Comparing RAG and RIG

While both Retrieval-Augmented Generation (RAG) and Retrieval Interleaved Generation (RIG) are advanced techniques designed to enhance LLM capabilities through external knowledge integration, they differ significantly in their methodologies and applications.

| **Aspect**                  | **Retrieval-Augmented Generation (RAG)**                | **Retrieval Interleaved Generation (RIG)**               |
| --------------------------- | ------------------------------------------------------- | -------------------------------------------------------- |
| Retrieval Process           | Performs retrieval once before generating a response    | Interleaves retrieval with generation dynamically        |
| Contextual Refinement       | Ideal for tasks requiring a single comprehensive answer | Continuous refinement suitable for conversational agents |
| Complexity and Adaptability | Simpler architecture; less adaptable                    | More complex; higher computational demands               |
| Use Cases                   | Best for straightforward queries                        | Ideal for multi-turn dialogues or evolving queries       |

## GraphRAG

GraphRAG is another approach designed to significantly enhance the reasoning capabilities of LLMs with the power of RAG and Graphs.

Unlike traditional RAG methods that rely on simple semantic searches using plain text snippets, GraphRAG employs a structured methodology to extract and utilize knowledge graphs from raw text data.

The process includes:

1. TextUnit Slicing: Input corpus is sliced into manageable TextUnits for further processing.

2. Entity Extraction: Using advanced LLMs, GraphRAG extracts entities and relationships from these TextUnits.

3. Hierarchical Clustering: It builds a community structure allowing for organized representation of information.

By leveraging generated knowledge graphs during query time, GraphRAG enhances the LLM's ability to reason about private datasets—data that the model has not previously encountered—enabling more intelligent responses in complex scenarios. This also helps the model to connect relevant information to generate the response with more factual accuracy.

![GraphRAG](https://dist.neo4j.com/wp-content/uploads/20240710214656/graphrag-architecture.png)

# Solution of Limited Context Window - MemGPT

## MemGPT: Extending Contextual Understanding in Large Language Models

As large language models (LLMs) continue to improve, they face inherent limitations due to their restricted context windows. This constraint significantly hampers their effectiveness in tasks such as extended conversations and comprehensive document analysis. To overcome these challenges, researchers have introduced MemGPT (MemoryGPT), a system that employs virtual context management inspired by hierarchical memory systems found in traditional operating systems.

### The Need for Extended Context

The limitations of standard LLMs are particularly evident when dealing with long-form content or multi-turn conversations. Traditional models typically process a fixed number of tokens, which restricts their ability to effectively retain and utilize information from previous interactions. This often leads to disjointed responses and a lack of continuity in conversations, ultimately diminishing the user experience.

Again going back to the Pluto example. When you first stated the facts about why you want Pluto to become a planet, the bot understood the facts. Then after some back–and–forth the bot will forget the actual reason you provided. Thus when asked to generate a presentation it will most likely fail or use irrelevant information. This can hamper the advancement in science that could have been achieved if the bot remembered the facts and created the presentation accordingly.

### MemGPT’s Approach

MemGPT addresses these challenges by intelligently managing different storage tiers to provide an extended context beyond the limitations of standard LLMs. By drawing parallels to how operating systems utilize paging to create the illusion of extended virtual memory, MemGPT enables LLMs to analyze large documents that exceed their native context window. This capability is particularly beneficial for applications requiring in-depth understanding and retention of information over time.

![MemGPT](https://media.licdn.com/dms/image/v2/D4D12AQF2CVJmN49HIA/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1700837845205?e=1738195200&v=beta&t=eUH-swO2is17wh0v5epYsEcbnXMaCJFunfObRvje_KI)

### Key Features of MemGPT

MemGPT excels in two key domains: document analysis and multi-session chat.

- Document Analysis: MemGPT processes extensive texts, enabling thorough examination and effective extraction of relevant information, making it invaluable for researchers and professionals. It breaks down lengthy documents into manageable segments while retaining context, ensuring critical information isn't lost. MemGPT maintains a cohesive understanding throughout the analysis.

- Multi-Session Chat: MemGPT facilitates dynamic interactions by remembering past exchanges and evolving responses based on long-term user engagement which is crucial for customer support. Its contextual memory and adaptive responses provide personalized and relevant dialogue, significantly enhancing user satisfaction.

# Other Methods That Caught Our Eyes

## Forward-Looking Active Retrieval Augmented Generation (FLARE)

FLARE is an approach designed to improve the performance of language models in long-form, knowledge-intensive generation tasks. Unlike traditional retrieval-augmented generation methods that retrieve information only once based on initial input, FLARE actively decides when and what to retrieve throughout the generation process. This iterative retrieval mechanism addresses the common issue of hallucination instances where LMs generate factually inaccurate outputs especially prevalent in longer texts.

The FLARE framework operates by first generating a temporary next sentence based on the current context. The model then assesses the confidence of this generated sentence by checking the probabilities of its tokens. If any token has a low probability, indicating uncertainty or lack of knowledge, FLARE retrieves relevant documents using the generated sentence as a query. This process allows the model to regenerate the sentence with new insights from the retrieved information, ensuring that it maintains accuracy and relevance throughout the generation.

![FLARE](https://github.com/jzbjyb/FLARE/blob/main/res/flare.gif?raw=true)

## Gorilla LLM: Transforming Language Models with API Integration

The Gorilla Project from UC Berkeley aims to revolutionize how large language models interact with external applications through API calls. By enabling LLMs to invoke APIs directly, Gorilla enhances their functionality and accuracy while significantly reducing issues such as hallucinations that can occur when models generate responses based solely on their internal knowledge.

At the core of Gorilla's innovation is a training methodology known as Retrieval Awareness Training (RAT). This approach allows models to sift through retrieved information effectively while distinguishing between high-quality and low-quality results. As a result, Gorilla demonstrates remarkable performance in zero-shot learning scenarios—achieving approximately twice the accuracy of models like GPT-3.5 while reducing hallucination rates by about 60%.

Gorilla supports various programming languages and API types making it versatile for numerous use cases. The project has introduced the Gorilla Execution Engine (GoEX) which facilitates executing LLM-generated actions including code and API calls while incorporating safety features like "undo" and "damage confinement" to manage unintended actions.

Furthermore, Gorilla features the Berkeley Function Calling Leaderboard (BFCL) which evaluates function-calling capabilities across different scenarios and programming languages—serving as a benchmark for assessing how well various models handle complex function calls in real-world applications.

## Self-Reflective Retrieval-Augmented Generation (Self-RAG)

Self-reflective retrieval-augmented Generation (Self-RAG) enhances language models' quality and factual accuracy by integrating adaptive retrieval mechanisms with self-reflection capabilities. Unlike traditional approaches relying solely on pre-defined retrieval processes, Self-RAG empowers models to dynamically assess when additional information retrieval is necessary based on task context.

The Self-RAG model generates textual outputs composed of multiple segments including both standard vocabulary and specialized reflection tokens. During inference:

1. The model first evaluates whether additional retrieval is necessary.

2. If it determines retrieval is warranted, it retrieves relevant passages while concurrently processing them.

3. This allows for a critique of its outputs alongside assessing relevance using designated critique tokens.

Key features include:

- Adaptive Retrieval: Models can dynamically decide when to retrieve information tailored specifically for tasks.

- Self-Reflection: By generating reflection tokens, models evaluate their generated content alongside retrieved passages fostering controlled output generation.

- Performance Breakthrough: Experiments show that Self-RAG significantly outperforms state-of-the-art LLMs across various tasks such as open-domain question answering and reasoning.

![SelfRAG](https://github.com/AkariAsai/self-rag/raw/main/images/teaser_self_rag_v8.png)

## Putting it all together

Self-retrieval-augmented generation (Self-RAG), Forward-Looking Active Retrieval-Augmented Generation (FLARE), Retrieval-Augmented Generation (RAG), Retrieval Interleaved Generation (RIG), GraphRAG, and Gorilla LLM are all advanced methodologies designed to enhance the capabilities of large language models (LLMs) through improved information retrieval mechanisms.

- Self-RAG combines traditional retrieval methods with self-reasoning, allowing models to critically assess the relevance of retrieved data during response generation, thereby reducing inaccuracies and enhancing coherence.

- FLARE actively retrieves information iteratively throughout the generation process, addressing hallucinations and ensuring outputs remain contextually relevant by assessing the confidence of generated content before finalizing responses.

- RAG performs retrieval only once before generating a response, making it effective for straightforward queries but less adaptable to evolving contexts.

- In contrast, RIG interleaves retrieval and generation processes, enabling continuous access to external knowledge during response formulation, which is particularly useful for complex or dynamic queries.

- GraphRAG enhances RAG by utilizing structured knowledge graphs to improve reasoning capabilities and contextual understanding.

- Meanwhile, Gorilla LLM revolutionizes how LLMs interact with external applications through API calls, utilizing a method called Retrieval Awareness Training (RAT) to sift through retrieved information effectively. This integration not only enhances accuracy and reduces hallucination rates but also enables LLMs to autonomously perform tasks by communicating directly with external services.

# Two interesting Case Studies From Harvard

As promised here are the 2 case studies from Harvard.

## KGARevion: Revolutionizing Medical Question Answering

KGARevion is a knowledge graph-based agent specifically designed for knowledge-intensive medical Q&A. It recognizes the complexity of biomedical knowledge and employs diverse reasoning strategies to enhance accuracy. By generating relevant triplets representing relationships between medical concepts and verifying them against a grounded knowledge graph, KGARevion outperforms traditional models by improving accuracy significantly.

The KGARevion agent operates through a multi-step process:

1. Triplet Generation: It generates structured data points representing relationships between medical concepts using the LLM's knowledge base.

2. Verification: These triplets are then verified against a grounded knowledge graph to filter out any inaccuracies, ensuring that only accurate and relevant information contributes to the final answer.

3. Performance Evaluation: Evaluations on gold-standard medical QA datasets demonstrate that KGARevion improves accuracy by over 5.2%, outperforming 15 competing models.

![KGARevion](https://zitniklab.hms.harvard.edu/img/KGARevion-2.png)

## PrimeKG: A Comprehensive Knowledge Graph for Precision Medicine

Understanding the intricate relationships between molecular and genetic factors and their phenotypic consequences is essential to provide personalized medicine. However, this knowledge is often fragmented across various publications and non-standardized research repositories. To address these challenges, researchers have developed PrimeKG—a precision medicine-oriented knowledge graph that offers a holistic view of diseases.

PrimeKG integrates information from 20 high-quality resources to comprehensively describe over 17,000 diseases and their interconnections:

- Comprehensive Integration: It encompasses over 4 million relationships across 10 major biological scales.

- Drug-Disease Prediction: One of PrimeKG's standout features is its support for drug-disease prediction, including detailed edges for indications and contradictions—elements typically absent in other knowledge graphs.

![PrimeKG](https://github.com/mims-harvard/PrimeKG/raw/main/fig/schematic.png)

## Conclusion

The field of artificial intelligence is undergoing rapid transformation, with groundbreaking approaches such as RAG, RIG, GraphRAG, MemGPT, Self-RAG, and Gorilla LLM leading the charge toward more accurate, reliable, and contextually aware language models. Each of these innovations tackles specific challenges faced by traditional large language models, including hallucinations, limited context windows, and the necessity for real-time knowledge integration. By harnessing the power of knowledge graphs, KGARevion and PrimeKG integrate structured medical knowledge to improve accuracy in healthcare applications.

For our use cases, we have shortlisted GraphRAG and MemGPT. Combining these 2 we can create an agent that will generate responses grounded in truth and be aware of the context throughout the conversation. As we delve deeper into the development of these agentic frameworks, we remain dedicated to sharing our findings and insights through our blog. As we continue our journey into these innovative frameworks, we look forward to sharing our discoveries with you in future blog posts.

## Citations

### Main Resources

https://zitniklab.hms.harvard.edu/projects/KGARevion/

https://zitniklab.hms.harvard.edu/projects/PrimeKG/

https://microsoft.github.io/graphrag/

https://github.com/microsoft/graphrag

https://research.memgpt.ai/

https://www.youtube.com/watch?v=nQmZmFERmrg

https://www.youtube.com/watch?v=4aOLxPdx1Dg

https://medium.com/@sahin.samia/retrieval-interleaved-generation-rig-using-llm-what-is-it-and-how-it-works-aa8be0e27bbc

https://gettectonic.com/rig-and-rag/#:~:text=Unlike%20RAG%2C%20which%20retrieves%20information,up-to-date%20information

https://arxiv.org/abs/2305.06983

https://openai.com/index/webgpt/

https://arxiv.org/abs/2310.11511

https://community.openai.com/t/sparse-priming-representation-vs-memgpt/450475

https://gorilla.cs.berkeley.edu/

https://arxiv.org/abs/2206.11408

https://github.com/mims-harvard/PrimeKG/raw/main/fig/schematic.png

https://zitniklab.hms.harvard.edu/img/KGARevion-2.png

https://github.com/AkariAsai/self-rag/raw/main/images/teaser_self_rag_v8.png

https://github.com/jzbjyb/FLARE/blob/main/res/flare.gif?raw=true

https://media.licdn.com/dms/image/v2/D4D12AQF2CVJmN49HIA/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1700837845205?e=1738195200&v=beta&t=eUH-swO2is17wh0v5epYsEcbnXMaCJFunfObRvje_KI

https://dist.neo4j.com/wp-content/uploads/20240710214656/graphrag-architecture.pn

https://miro.medium.com/v2/resize:fit:1078/1*5f1lWY3CEuF8bH2Y4RNW2w.png

### Extra Resources

https://heidloff.net/article/self-rag-retrieval-augmented-generation/

https://andlukyane.com/blog/paper-review-selfrag

https://openreview.net/pdf?id=hSyW5go0v8

https://mlnotes.substack.com/p/intuitive-guide-to-self-rag

https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph_self_rag/

https://www.linkedin.com/pulse/exploring-self-reasoning-retrieval-augmented-rag-robyn-le-sueur-bzqdf

https://konghq.com/blog/engineering/gorilla-llm

https://gorilla.cs.berkeley.edu

https://github.com/ShishirPatil/gorilla

https://huggingface.co/datasets/gorilla-llm/Berkeley-Function-Calling-Leaderboard

https://sky.cs.berkeley.edu/project/gorilla-openfunctions/

https://www.superannotate.com/blog/rag-explained

https://en.wikipedia.org/wiki/Retrieval-augmented_generation

https://www.k2view.com/what-is-retrieval-augmented-generation

https://www.tonic.ai/guides/what-is-retrieval-augmented-generation-the-benefits-of-implementing-rag-in-using-llms

https://www.promptingguide.ai/research/rag

https://www.linkedin.com/pulse/exploring-self-reasoning-retrieval-augmented-rag-robyn-le-sueur-bzqdf

https://training.continuumlabs.ai/knowledge/retrieval-augmented-generation/active-retrieval-augmented-generation

https://docs.datastax.com/en/ragstack/examples/flare.html

https://arxiv.org/abs/2305.06983

https://openreview.net/forum?id=WLZX3et7VT&noteId=MC4TUfGjJr

https://www.youtube.com/watch?v=IVYwLLDABzI

https://blog.ailab.sh/2024/09/exploring-difference-between-retrieval.html

https://ajithp.com/2024/09/13/enhancing-ai-accuracy-from-retrieval-augmented-generation-rag-to-retrieval-interleaved-generation-rig-with-googles-datagemma/

https://pub.towardsai.net/retrieval-interleaved-generation-rig-when-real-time-data-retrieval-meets-response-generation-a33e44ddbd74?gi=ec09165e40c6

https://gettectonic.com/rig-and-rag/

https://www.kaggle.com/discussions/general/541623

https://www.linkedin.com/pulse/rig-vs-rag-googles-latest-ai-breakthrough-focuskpi-j5dvc

https://ajithp.com/2024/09/13/enhancing-ai-accuracy-from-retrieval-augmented-generation-rag-to-retrieval-interleaved-generation-rig-with-googles-datagemma/

https://towardsai.net/p/machine-learning/retrieval-interleaved-generation-rig-when-real-time-data-retrieval-meets-response-generation

http://www.pragnakalp.com/retrieval-interleaved-generation-transforming-ai-with-real-time-insights/

https://www.youtube.com/watch?v=sObu4Q2CQVU

https://www.linkedin.com/pulse/age-rig-retrieval-interleaved-generation-here-alamelu-qknbc

https://www.linkedin.com/pulse/retrieval-interleaved-generation-rig-enhancing-ai-accuracy-agrawal-0dtbf

https://www.superannotate.com/blog/rag-explained

https://en.wikipedia.org/wiki/Retrieval-augmented_generation

https://aws.amazon.com/what-is/retrieval-augmented-generation/

https://www.splunk.com/en_us/blog/learn/retrieval-augmented-generation-rag.html

https://www.oracle.com/in/artificial-intelligence/generative-ai/retrieval-augmented-generation-rag/

https://research.ibm.com/blog/retrieval-augmented-generation-RAG

https://blogs.nvidia.com/blog/what-is-retrieval-augmented-generation/

https://research.memgpt.ai

https://microsoft.github.io/graphrag/

https://www.nature.com/articles/s41597-023-01960-3

https://zitniklab.hms.harvard.edu/projects/PrimeKG/

https://www.biorxiv.org/content/10.1101/2022.05.01.489928v2

https://pmc.ncbi.nlm.nih.gov/articles/PMC10885565/

https://www.researchgate.net/publication/368169624_Building_a_knowledge_graph_to_enable_precision_medicine

https://www.linkedin.com/posts/giacintobarresi_building-a-knowledge-graph-to-enable-precision-activity-7090989187117498368-3zq_

https://www.researchgate.net/publication/360755060_Building_a_knowledge_graph_to_enable_precision_medicine

https://arxiv.org/abs/2401.11817

https://www.nls.ac.in/research/projects/the-disadvantages-and-limitations-of-using-large-language-models-in-the-field-of-law/

https://www.lakera.ai/blog/guide-to-hallucinations-in-large-language-models

https://www.projectpro.io/article/llm-limitations/1045

https://www.k2view.com/blog/llm-hallucination/


