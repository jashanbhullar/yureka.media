## Yureka Fleet Management

Rooftop Taxi Advertsement for Dubai, Riyadh and Cape Town.

### Backend

- fastAPI base
- postgres + postgis + mobilityDB
- migrations - alembic
- package manager - uv
- formatter & linter - ruff

### Frontend

- React + Typescript
- Vite compiler
- Chakra UI
- MaplibreGL - later

### TODO

- [ ] Add ruff for backend
- [ ] Ruff setup for vscode
- [ ] Docker file for backend
- [ ] Docker commands for backend mobilityDB
- [ ] Makefile for backend commands

## MVP

1. Real-Time Location Tracking

- Map View: Display a live map showing the current location of taxis carrying the advertiser's ads.
- Taxi Selection: Ability to select individual taxis to view specific ad play data.

2.  Ad Play Data

- Time Logs: Show when and where each ad was played.
- Duration and Frequency: Information on the length and frequency of ad plays for each taxi.

3.  Billing Information

- Cost Breakdown: Real-time cost calculation based on the ad's playtime and location.
- Invoice Generation: Option to view and download invoices for the advertising services.

4.  Campaign Management

- Ad Upload and Setup: Functionality for advertisers to upload and set up their ad creatives.
- Campaign Scheduling: Tools to schedule when and where ads will be displayed.

5.  Analytics and Reporting

- Performance Metrics: Key metrics like total impressions, estimated reach, etc.
- Custom Reports: Ability to generate custom reports based on various parameters.

6.  Account Management

- Profile Settings: Manage account details, payment methods, etc.
- Support Access: Contact support or access help resources.

MVP Interface Design Principles

- Simplicity: Keep the user interface clean and straightforward to navigate.
- Responsiveness: Ensure the dashboard is responsive and accessible on various devices.
- User-Centric: Design with the advertiser's ease of use in mind, with intuitive controls and visible data points.

Example Dashboard Layout

- Top Bar: Navigation for Home, Campaign Management, Analytics, Account Settings.
- Main Area: Interactive map with real-time taxi locations.
- Sidebar: Summary of current ad plays, costs, and quick access to recent reports.
- Footer: Links to support, FAQs, and contact information.

This MVP provides a basic yet functional platform for advertisers to manage and track their ad campaigns effectively. It's designed to deliver essential services and can be expanded with more features based on user feedback and business requirements.
Let's delve deeper into sections 2, 3, and 4 of the MVP dashboard for the rooftop taxi ad service:

2.  Ad Play Data
    This section provides detailed information about each advertisement's play history.

- Ad Playback Timeline: A chronological feed showing when and where each ad was displayed. This can include time stamps, taxi ID, and geographical location.
- Duration and Frequency Insights: Graphs or tables showing the total duration of ad plays per day/week/month and frequency patterns, helping advertisers understand how often and how long their ads are being displayed.
- Heat Maps: Visual representation of where ads are being played most frequently across the city, helping advertisers see high-exposure areas.

3.  Billing Information
    This crucial section deals with all aspects of billing and costs.

- Dynamic Cost Calculation: Real-time display of costs incurred, calculated based on the duration and location of each ad play. For example, showing different rates charged when a taxi enters a high-traffic or premium area.
- Invoice Management: Functionality to view detailed invoices, showing breakdowns of costs. Advertisers should be able to download or print invoices for their records.
- Payment History and Options: A summary of past payments and the ability to manage payment methods, like adding credit cards or setting up direct debits.

4.  Campaign Management
    Tools and features for advertisers to manage their ad campaigns effectively.

- Ad Upload and Setup: A user-friendly interface for uploading ad creatives, with specifications and guidelines provided. This could include tools to preview how the ad will look.
- Campaign Scheduling Tools: Calendars and scheduling interfaces where advertisers can choose specific dates, times, and even preferred routes or regions for their ads.
- Ad Performance Goals: Functionality to set specific campaign goals, such as desired reach, impressions, or specific geographic coverage.
- Campaign Analytics: Integration with the analytics section for tracking the performance of specific campaigns, including metrics like estimated reach and engagement.

In this detailed approach, the dashboard becomes a comprehensive tool, giving advertisers control over their campaigns and clear insights into their performance and costs. This level of detail supports informed decision-making and campaign optimization.

Certainly, let's dive deeper into the Campaign Management aspect of the MVP dashboard for rooftop taxi ads, focusing on the functionality and features it should offer.

Campaign Management Detailed Features

1. Ad Upload and Configuration

   - User Interface: A simple, drag-and-drop interface for uploading ad creative files (videos or images).
   - Ad Specifications: Provide guidelines on ad dimensions, file sizes, formats, and any technical requirements.
   - Preview Feature: Enable advertisers to preview how their ad will appear on the taxi top screens.
   - Ad Versioning: Allow advertisers to store and manage different versions of their ads for different campaigns or audiences.

2. Campaign Scheduling

   - Calendar Interface: A visual calendar to schedule ad campaigns. Advertisers can select start and end dates and specific time slots.
   - Geographic Targeting: Options to target ads based on specific routes or areas in Dubai. For example, choosing Downtown or JBR for certain times of the day.
   - Time-Based Targeting: Allow scheduling based on part of the day, like morning rush hour or evening, aligning ad plays with peak traffic times.

3. Campaign Goals and Targeting

   - Objective Setting: Function to set campaign objectives like brand awareness, specific reach, or targeting particular demographics.
   - Audience Segmentation: Tools to segment audiences based on geographic locations, potentially integrating third-party demographic data to refine targeting.
   - Budget Allocation: Interface to set and adjust the campaign budget, with options for daily or total campaign spend.

4. Campaign Analytics and Optimization

   - Real-Time Analytics: Dashboard to show real-time performance data, such as number of plays, duration, and geographical reach.
   - Historical Data Analysis: Access to historical campaign data for performance comparison and trend analysis.
   - A/B Testing Tools: Facilitate A/B testing for different ad creatives or scheduling patterns to identify the most effective strategies.
   - Custom Reports: Ability to create and download custom reports based on specific KPIs and metrics.

5. Feedback and Adjustments

   - Interactive Feedback Loop: System to receive and implement feedback from the campaign data, allowing advertisers to adjust their strategies accordingly.
   - Campaign Modification Tools: Options to modify ongoing campaigns, such as changing the ad creative, adjusting the schedule, or reallocating the budget.

6. Integration with External Tools

   - API Connectivity: Offer API integration for advertisers who want to link the platform with their own marketing tools or CRM systems.
   - Data Export Options: Enable data export in various formats for use in external analysis tools.

7. User Support and Guidance
   - Tutorial and Guidelines: Include tutorials and best practice guides for new users.
   - Customer Support Access: Easy access to customer support for assistance with campaign setup, troubleshooting, and optimization advice.

Importance of These Features

- Efficiency and Control: These features empower advertisers with the tools and data they need to efficiently manage their campaigns, make informed decisions, and have complete control over their advertising strategies.
- Targeting and Optimization: Advanced targeting and real-time analytics ensure that advertisers can optimize their campaigns for the best possible ROI.
- Flexibility: The ability to modify campaigns in real-time and the integration with external tools provide the flexibility needed in a dynamic advertising environment like rooftop taxi ads.

Implementing these features in the campaign management section of the dashboard would provide advertisers with a robust, user-friendly platform for maximizing the impact of their ad campaigns.

Certainly! Let's delve into a detailed view of section 5, "Analytics and Reporting", for the MVP advertiser dashboard in a rooftop taxi ad service.

5.  Analytics and Reporting

This section is dedicated to providing advertisers with detailed insights and data analysis regarding their ad campaigns. Effective analytics can help advertisers understand the impact of their ads and make informed decisions for future campaigns.

Key Features of Analytics and Reporting

1. Dashboard Overview: A summary view that provides a snapshot of the campaign's overall performance. This may include quick stats like total impressions, reach, engagement rate, and average cost per impression.

2. Impression and Reach Data: Detailed data showing how many times ads were displayed (impressions) and the estimated number of unique viewers (reach). This could be broken down by time of day, region, and ad type.

3. Engagement Metrics: If applicable, track engagement metrics such as QR code scans or interactions with the ad. This data can be crucial for understanding how viewers are interacting with the ads.

4. Historical Data Comparison: Ability to compare current campaign performance against past campaigns. This helps in understanding trends and improvements over time.

5. Customizable Reports: Allow advertisers to generate custom reports based on specific data points. For instance, an advertiser might want a report focusing solely on peak hour performance in Downtown Dubai.

6. Heat Map Visualization: Graphical representation showing where ads get the most exposure. Heat maps can help in visualizing high-traffic areas versus less frequented regions.

7. ROI Calculations: Tools to help advertisers estimate the return on investment, based on the cost of the ad and engagement or conversion metrics.

8. Data Export Options: Capability for advertisers to export data in various formats (like CSV, PDF) for further analysis or presentations.

9. Performance Alerts: Automated alerts notifying advertisers of significant changes or milestones in campaign performance (e.g., when an ad reaches a certain number of impressions).

10. Audience Insights: Detailed demographic and psychographic information about the audience who have viewed the ads, if available. This might include age groups, interests, or geographic locations.

11. Interactive Data Exploration: Advanced users can delve deeper into data with interactive tools, like filtering options or drill-down capabilities for detailed analysis.

Design Considerations

- User-Friendly Interface: The analytics section should be intuitive, with easy-to-understand graphs and charts.
- Real-Time Data: Offer as much real-time data as possible, giving advertisers up-to-date insights.
- Customization: Allow users to customize their view and reports, focusing on the data most relevant to them.
- Help and Support: Provide tooltips, guides, and customer support for users needing assistance in understanding or navigating the analytics.

To accurately determine the engagement metrics (5.3) and impression/reach data (5.2) for rooftop taxi ad campaigns, various technological and analytical methods are employed:

5.2 Impression and Reach Data

1. GPS and Traffic Data: Utilize the GPS data from taxis to estimate the number of potential viewers. This can be based on the taxi's routes, locations, and the average traffic data in those areas.

2. Geofencing Technology: By setting up virtual perimeters (geofences) around certain high-traffic areas, you can more accurately estimate the number of potential viewers when your taxis enter these zones.

3. Crowd Analytics: Some advanced systems can use crowd analytics tools to estimate the number of people in a particular area at a given time. This, however, may raise privacy concerns and should be managed in compliance with data protection regulations.

4. Third-Party Data Integration: Partner with traffic and mobility data providers for more accurate estimates of footfall and vehicular traffic in different areas of the city.

   5.3 Engagement Metrics

5. QR Codes and Unique URLs: Incorporate QR codes or unique URLs into the ad creatives. When viewers scan these codes or visit these URLs, you can track these interactions as direct engagement metrics.

6. Social Media Integration: Encourage interaction with the ad through social media platforms (like hashtags or filters). Track the use of these ad-specific hashtags or filters to gauge engagement.

7. Analytics Software: Use digital analytics tools to track and analyze engagement data gathered from QR codes, URLs, and social media interactions.

8. Surveys and Market Research: Conduct surveys or market research to gather qualitative data on viewer recall and engagement with the ads.

Implementation and Privacy Considerations

- Privacy Compliance: Ensure that all data collection methods comply with privacy laws and regulations, like GDPR. This is especially important when dealing with location and engagement tracking.
- Technology Infrastructure: Implementing these methods requires a robust technological infrastructure capable of handling real-time data collection and analysis.
- Transparency with Users: Be transparent with your audience about how their data is being used, especially if any form of direct engagement tracking is involved.

By using a combination of these methods, you can obtain a clearer picture of the impression and reach of your ads, as well as understand how viewers are engaging with them. This data is crucial for advertisers to evaluate the effectiveness of their campaigns and make informed decisions.
