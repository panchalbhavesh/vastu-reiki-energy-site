# Vastu Reiki Energy website

A static website for GitHub Pages. It uses HTML, CSS and a small navigation script. No build step or server is needed. All displayed artwork comes from the original supplied website images. Rejected generated photos are not included in the deployment package.

## Publish on GitHub Pages

1. Extract the archive. Put the contents of `vastu-reiki-energy-site` in the root of your repository. The root must contain `index.html`, `site.css`, `site.js`, `.nojekyll` and the `images` folder.
2. In the repository, open **Settings → Pages**.
3. Choose **Deploy from a branch**, select the branch containing these files, then select **/(root)** and save.
4. Wait for GitHub's deployment to finish, then use the site address shown in Settings → Pages.

[Official GitHub publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Confirm the public address before launch

The supplied site's existing SEO address is `https://www.vastureikienergy.com/`. This remains in the canonical links, sharing metadata, structured data, sitemap and robots file. If you use that custom domain, configure it in GitHub Pages settings and your domain provider.

If you will use a `github.io` address instead, replace the existing address in all four HTML files, `sitemap.xml` and `robots.txt` with the final address, including the repository path for a project site. The ordinary navigation, image and stylesheet links are relative, so they support a repository subfolder.

Do not add a custom domain unless you intend to use it. No CNAME file or DNS changes have been made.

## Enquiries

Buttons open WhatsApp, email or the phone app. They do not automatically send messages or confirm appointments. No form service or server is configured.

## Review status

Local source checks cover HTML structure, image dimensions and files, local links, service order, structured data and JavaScript syntax. Browser rendering and external enquiry delivery have not been verified. Check the published site on a phone and desktop before sharing it widely.
