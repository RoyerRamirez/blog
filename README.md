# Blog

This dynamic blog site is using Notion as a Content Management System (CMS). Supports both Blog format Post as well as Page format.

## Features

**📒 Write posts using Notion**

- No need to make commits in order to make blog posts. 
- Posts from Notion are automaticaly updated to this site.

**📄 Generate full pages as well.**

- Can be used for Resume, random pages, etc.

**👀 SEO friendly**

- Dynamically generates OG IMAGEs thumbnails for posts. 
- Dynamically creates sitemap for posts.

## Deploying

1. [Fork](https://github.com/morethanmin/morethan-log/fork) the repo to your Profile.
3. Duplicate [this Notion template](https://quasar-season-ed5.notion.site/12c38b5f459d4eb9a759f92fba6cea36?v=2e7962408e3842b2a1a801bf3546edda), and Share to Web.
4. Copy the Web Link and keep note of the Notion Page Id from the Link which will be in this format [username.notion.site/`NOTION_PAGE_ID`?v=`VERSION_ID`].
5. Clone your forked repo and then customize `site.config.js` based on your preference.
6. Deploy to desired Cloud provider (Google Cloud, AWS, Azure, Gitlab, etc.)
7. Expose the following environment variables:
   - `NOTION_PAGE_ID` (Required): The Notion page Id got from the Share to Web URL.
   - `GOOGLE_MEASUREMENT_ID` (Optional): For Google analytics Plugin.
   - `GOOGLE_SITE_VERIFICATION` (Optional): For Google search console Plugin.