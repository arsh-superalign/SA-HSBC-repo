# mcp-atlassian approach:
> mcp-atlassian — live CQL/JQL tools
> sooperset/mcp-atlassian
> Not a chatbot. An MCP server (98 tools) that any MCP-capable agent uses to search and fetch Confluence and Jira live. Cloud and Server/DC both supported.
> Ingest. None. No vector store, no sync job. At question time the model emits CQL or JQL. `SearchMixin.search` runs `confluence.cql()`, converts HTML excerpts to markdown, and ANDs an operator space allowlist so a caller cannot escape configured spaces. Jira is the same idea with `jira_search`.
> Answer. Natural language → tool call → native Atlassian search → hydrate with `confluence_get_page` / `jira_get_issue` → LLM synthesizes. Freshness is perfect; semantic recall over the whole wiki is weak because ranking is Atlassian keyword/CQL search, not embeddings. Disable write tools for a read-only knowledge bot.
---
