# PayRanked: Jobs & Company Aggregator

Company and job transparency have been at an all-time low, with employers trying to prevent salary discussions among employees, and the lack of company and job specific information available on the internet. This poses a huge problem to the vast majority of job seekers. PayRanked aims to put the power back into the hands of job seekers by promoting job transparency in the workplace.

Payranked uses a combination of qualitative and quantitative metrics like salary, work-life balance, and many more to help job seekers find their dream job. 

This project uses the React library and Next.js framework for serverside rendering (SEO purposes). This includes multiple optimisations for speed such as lazy loading and image size optimisation, amongst many others. All jobs and company data shown are stored using an SQL database hosted by JawsDB, while blog posts data are stored using MongoDB cloud. Data is dynamically retrieved using express and node backend for both these databases. All pages are dynamically resizable and fit for most media sizes (small < 480px, medium < 768px, large < 1200px, very large > 1200px).

## Multi-Pronged Approach

1. **Full Transparency**: Transparency in the workplace helps to align employees expectations, ensuring that every individual is fairly compensated. It also leads to happier and healthier employees. Stop pay discrimination now!
2. **Cohesive Evaluation**: Jobs are not only about money. We use various metrics to evaluate jobs and companies - comprising not only extrinsic metrics like compensation, but intrinsic ones like work-life balance and culture.
3. **Complete Anonymity**: All your company-related information is encrypted and untraceable - not even by us! Share your experiences at your company with other people without worrying at all.

‍
## Key Pages:

### 1) Company Page

The company page includes information about a specific company, and has an overview and reviews section:

**Overview Section**
This section includes the overall company ratings determined by 4 aspects, general salary information such as mean, median, etc, an interactive barchart showing compensation distribution, and a table with specific individual job information.

![screencapture-payranked-companies-bytedance-2023-01-02-18_22_39](https://user-images.githubusercontent.com/42771547/210218982-ca2d22dd-e80b-454c-85f4-4bed6cd056fc.png)

**Review Section**
This section shows the overall ratings, compared against the ratings of other companies. It also inludes reviews from people.

### 2) Job Page

This section is very similar to the company page, except that instead of company-specific information, it now showcases job-specific information.

**Overview Section**


**Review Section**


### 3) Submission Page

This allows for people to submit job information anonymously.

### 4) Blog Post Page

These pages are blog posts written by me, including a full markdown editor (only accessible after logging in and by admins i.e. me). Therefore, the blog posts include features like links (with hover effects), images, h1, h2, h3..., bullet points. Admins are also capable of editing the blog posts directly.

## Other Pages:

### 1) Main Page

### 2) Companies Page

### 3) Jobs Page

### 4) Salaries Page
‍
### 5) Blogs Page

## Miscellaneous Pages:

### Meet the Team Page

I made a meet the team page, which included some friends. It includes a hover effect for the images.

### 404 Page

If you click on a broken link or visit a non-existent URL, you will be redirected to a 404 page.
