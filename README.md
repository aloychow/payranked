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

**Overview Section**:
This section includes the overall company ratings determined by 4 aspects, general salary information such as mean, median, etc, an interactive barchart showing compensation distribution, and a table with specific individual job information.

![screencapture-payranked-companies-bytedance-2023-01-02-18_22_39](https://user-images.githubusercontent.com/42771547/210218982-ca2d22dd-e80b-454c-85f4-4bed6cd056fc.png)

**Review Section**:
This section shows the overall ratings, compared against the ratings of other companies. It also inludes reviews from people.

![screencapture-payranked-companies-bytedance-2023-01-02-18_25_00](https://user-images.githubusercontent.com/42771547/210219178-ce0bf5d7-a18a-4c3d-8291-82b39e42963a.png)

### 2) Job Page

This section is very similar to the company page, except that instead of company-specific information, it now showcases job-specific information.

**Overview Section**

![screencapture-payranked-jobs-software-engineer-2023-01-02-18_26_18 (1)](https://user-images.githubusercontent.com/42771547/210219319-ca1976b8-91b5-4f4b-a0b2-fff403c2c19d.png)

**Review Section**

![screencapture-payranked-jobs-software-engineer-2023-01-02-18_26_34](https://user-images.githubusercontent.com/42771547/210219368-f8c71da8-6181-475b-ac02-45743da73213.png)

### 3) Submission Page

This allows for people to submit job information anonymously.

![screencapture-payranked-submission-full-2023-01-02-18_27_59](https://user-images.githubusercontent.com/42771547/210219434-8145f363-f199-4768-8f9a-48dad1d64f05.png)

### 4) Blog Post Page

These pages are blog posts written by me, including a full markdown editor (only accessible after logging in and by admins i.e. me). Therefore, the blog posts include features like links (with hover effects), images, h1, h2, h3..., bullet points. Admins are also capable of editing the blog posts directly.

![screencapture-payranked-blog-mastering-common-behavioral-questions-in-job-interviews-2023-01-02-18_29_10](https://user-images.githubusercontent.com/42771547/210219656-24a6a5ec-5ca1-4dba-b79a-059fa12a6541.png)

## Other Pages:

### 1) Main Page

![screencapture-payranked-2023-01-02-18_32_22](https://user-images.githubusercontent.com/42771547/210219942-c183e610-2643-4919-b0ad-8827a329ebed.png)

### 2) Companies Page

![screencapture-payranked-companies-2023-01-02-18_33_15](https://user-images.githubusercontent.com/42771547/210220006-28f1605d-6daf-4f6b-89c0-6a67395744ba.png)

### 3) Jobs Page

![screencapture-payranked-jobs-2023-01-02-18_33_54](https://user-images.githubusercontent.com/42771547/210220086-e3f03638-be7c-43df-8dca-e1c973002028.png)

### 4) Salaries Page

‍![screencapture-payranked-salaries-2023-01-02-18_34_37](https://user-images.githubusercontent.com/42771547/210220134-bf6f1b0a-94fa-4081-87b1-ffefee09766a.png)

### 5) Blogs Page

![screencapture-payranked-blog-2023-01-02-18_35_16](https://user-images.githubusercontent.com/42771547/210220212-42da9ad3-6599-4421-8489-2d274c855e5e.png)

## Miscellaneous Pages:

### Meet the Team Page

I made a meet the team page, which included some friends. It includes a hover effect for the images.

![Screenshot 2023-01-02 at 6 36 11 PM](https://user-images.githubusercontent.com/42771547/210220253-34bfd73e-fadd-4e13-ac1c-57aed7d0661a.png)
![Screenshot 2023-01-02 at 6 36 35 PM](https://user-images.githubusercontent.com/42771547/210220295-7a36176b-d110-4c15-a7e7-0c32c126d044.png)

### 404 Page

If you click on a broken link or visit a non-existent URL, you will be redirected to a 404 page.

![Screenshot 2023-01-02 at 6 36 49 PM](https://user-images.githubusercontent.com/42771547/210220322-20eeb933-0f0f-4714-8949-335a3b97e484.png)
