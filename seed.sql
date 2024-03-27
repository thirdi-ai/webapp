use thirdidb;

insert into brand_metadata (industry) values ('Accounting'),('Airlines/Aviation'),('Alternative Dispute Resolution'),('Alternative Medicine'),('Animation'),('Apparel/Fashion'),('Architecture/Planning'),('Arts/Crafts'),('Automotive'),('Aviation/Aerospace'),('Banking/Mortgage'),('Biotechnology/Greentech'),('Broadcast Media'),('Building Materials'),('Business Supplies/Equipment'),('Capital Markets/Hedge Fund/Private Equity'),('Chemicals'),('Civic/Social Organization'),('Civil Engineering'),('Commercial Real Estate'),('Computer Games'),('Computer Hardware'),('Computer Networking'),('Computer Software/Engineering'),('Computer/Network Security'),('Construction'),('Consumer Electronics'),('Consumer Goods'),('Consumer Services'),('Cosmetics'),('Dairy'),('Defense/Space'),('Design'),('E-Learning'),('Education Management'),('Electrical/Electronic Manufacturing'),('Entertainment/Movie Production'),('Environmental Services'),('Events Services'),('Executive Office'),('Facilities Services'),('Farming'),('Financial Services'),('Fine Art'),('Fishery'),('Food Production'),('Food/Beverages'),('Fundraising'),('Furniture'),('Gambling/Casinos'),('Glass/Ceramics/Concrete'),('Government Administration'),('Government Relations'),('Graphic Design/Web Design'),('Health/Fitness'),('Higher Education/Acadamia'),('Hospital/Health Care'),('Hospitality'),('Human Resources/HR'),('Import/Export'),('Individual/Family Services'),('Industrial Automation'),('Information Services'),('Information Technology/IT'),('Insurance'),('International Affairs'),('International Trade/Development'),('Internet'),('Investment Banking/Venture'),('Investment Management/Hedge Fund/Private Equity'),('Judiciary'),('Law Enforcement'),('Law Practice/Law Firms'),('Legal Services'),('Legislative Office'),('Leisure/Travel'),('Library'),('Logistics/Procurement'),('Luxury Goods/Jewelry'),('Machinery'),('Management Consulting'),('Maritime'),('Market Research'),('Marketing/Advertising/Sales'),('Mechanical or Industrial Engineering'),('Media Production'),('Medical Equipment'),('Medical Practice'),('Mental Health Care'),('Military Industry'),('Mining/Metals'),('Motion Pictures/Film'),('Museums/Institutions'),('Music'),('Nanotechnology'),('Newspapers/Journalism'),('Non-Profit/Volunteering'),('Oil/Energy/Solar/Greentech'),('Online Publishing'),('Other Industry'),('Outsourcing/Offshoring'),('Package/Freight Delivery'),('Packaging/Containers'),('Paper/Forest Products'),('Performing Arts'),('Pharmaceuticals'),('Philanthropy'),('Photography'),('Plastics'),('Political Organization'),('Primary/Secondary Education'),('Printing'),('Professional Training'),('Program Development'),('Public Relations/PR'),('Public Safety'),('Publishing Industry'),('Railroad Manufacture'),('Ranching'),('Real Estate/Mortgage'),('Recreational Facilities/Services'),('Religious Institutions'),('Renewables/Environment'),('Research Industry'),('Restaurants'),('Retail Industry'),('Security/Investigations'),('Semiconductors'),('Shipbuilding'),('Sporting Goods'),('Sports'),('Staffing/Recruiting'),('Supermarkets'),('Telecommunications'),('Textiles'),('Think Tanks'),('Tobacco'),('Translation/Localization'),('Transportation'),('Utilities'),('Venture Capital/VC'),('Veterinary'),('Warehousing'),('Wholesale'),('Wine/Spirits'),('Wireless'),('Writing/Editing');

insert into campaign_goal_md(goal) values('Branding'), ('Acquisition'), ('Installs'),('Shopping');

insert into campaign_goal_metrics_md(key_metrics, goal_id) values('Video Completion', 1), ('Thru Play', 1), ('CPC', 1), ('CTR', 1),
('eCPM', 1), ('CTR', 2), ('CPC', 2), ('eCPM', 2), ('CPL', 2), ('CR%', 2), ('CTR', 3), ('CPC', 3), ('eCPM', 3), ('CPI', 3),
('CR%', 3), ('CTR', 4), ('CPC', 4), ('eCPM', 4), ('CAC', 4), ('CR%', 4);

insert into campaign_sec_goal_md(secondary_goal) values('Spend'), ('Impressions'), ('Clicks');

insert into campaign_targeting_l1_md(target_level1) values ('Age'), ('Gender'), ('Location'), ('Education'), ('Income Level'),
('Net Worth'), ('Home Ownership'), ('Home Value'), ('Household Composition'), ('Life Events'), ('Birth Month'), ('Parents'),
('Moms'), ('Polical Affiliation'), ('Relationship'), ('Profession'), ('Professional Affiliation'),('Personal Interests'),
('Behavior'), ('Company Size'), ('Industry'), ('Professional Role'), ('Digital Affiliation'), ('Expats'), ('Cultural Affinity');

insert into campaign_targeting_l2_md(targeting_l1_id, target_level2) values 
(1, '0-10 Years'), (1, '10-18 Years'), (1, '18-22 Years'), (1, '22-30 Years'), (1, '30-40 Years'), (1, '40-50 Years'), (1,'50-60 Years'), (1, '60 Years+'),
(2, 'Male'), (2, 'Female'), (2, 'Others'),
(4, 'College Degree'), (4, 'Doctorate Degree'), (4,'High School Grad'), (4,'Master’s Degree'), (4,'Professional Degree'),(4,'Unspecified'),
(5,'$40,000 - $49,999'), (5,'$50,000 - $74,999'), (5,'$75,000 - $99,999'), (5,'$100,000 - $124,999'),(5,'$125,000 - $249,999'), (5,'$250,000 - $499,999'),(5,'Over $500,000'),
(6, '$100,000 - $124,999'),(6,'$125,000 - $249,999'), (6,'$250,000 - $499,999'),(6,'$500,000 - $999,999'),(6,'Over $1,000,000'),
(7,'First Time Homebuyer'), (7,'Homeowners'), (7,'Renters'),
(8,'$50,000 - $99,999'), (8,'$100,000 - $249,999'), (8,'$250,000 - $499,999'),(8,'$500,000 - $999,999'),(8,'$1,000,000 - $1,999,999'),(8,'Over $2,000,000'),
(9,'Grandparents'),(9,'New parents'),(9,'Veterans in home'),(9,'Working women'),(9,'Young and hip'),(9,'Young adults in home'),
(10,'Away from family'),(10,'Away from hometown'),(10,'Long-distance relationship'),(10,'New job'),(10,'New relationship'),(10,'Newly engaged'),(10,'Recently moved'),(10,'Anniversary coming'),(10,'Birthday coming'),
(11,'January'),(11,'February'),(11,'March'),(11,'April'),(11,'May'),(11,'June'),(11,'July'),(11,'August'),(11,'September'),(11,'October'),(11,'November'),(11,'December'),
(12,'New parents (0-12 months)'),(12,'Parents(All)'),(12,'Parents with preschoolers (3-5 years)'),(12,'Parents with adult children (18-26 years)'),(12,'Parents with early school-age children (6-8 years)'),(12,'Parents with preteens (8-12 years)'),(12,'Parents with teenagers (13-18 years)'),(12,'Parents with toddlers (1-2 years)'),
(13, 'Big-city moms'),(13,'Corporate moms'),(13,'Fit moms'),(13,'Green moms'),(13,'Moms of grade school kids'),(13,'Moms of high school kids'),(13,'Moms of preschool kids'),(13,'New Moms'),(13,'Soccer Moms'),(13,'Stay-at-home moms'),(13,'Trendy Moms'),
(14,'Conservative'),(14, 'Liberal'),(14,'Moderate'),
(15,'Divorced'),(15,'Engaged'),(15,'Married'),(15,'Separated'),(15,'Single'),(15,'Widowed'),
(16,'Administrative Services'),(16,'Architecture and Engineering'),(16,'Arts, Entertainment, Sports and Media'),(16,'Business and Finance'),(16,'Cleaning and Maintenance Services'),(16,'Community and Social Services'),(16,'Computation and Mathematics'),(16,'Construction and Extraction'),(16,'Education and Libraries'),(16,'Farming, Fishing and Forestry'),(16,'Food and Restaurants'),(16,'Government Employees'),(16,'Healthcare and Medical Services'),(16,'IT and Technical Services'),(16,'Installation and Repair Services'),(16,'Legal Services'),(16,'Life, Physical and Social Sciences'),(16,'Management'),(16,'Military'),(16,'Personal Care and Home Services'),(16,'Production'),(16,'Protective Services'),(16,'Sales'),(16,'Transportation and Moving'),(16,'Veterans (US)'),
(17,'Advertising'),(17,'Agriculture'),(17,'Architecture'),(17,'Aviation'),(17,'Banking'),(17,'Business'),(17,'Construction'),(17,'Design'),(17,'Economics'),(17,'Engineering'),(17,'Entrepreneurship'),(17,'Health Care'),(17,'Higher Education'),(17,'Management'),(17,'Marketing'),(17,'Nursing'),(17,'Online'),(17,'Personal Finance'),(17,'Credit Cards'),(17,'Insurance'),(17,'Investment'),(17,'Mortgage loans'),(17,'Real Estate'),(17,'Retail'),(17,'Sales'),(17,'Science'),(17,'Small business'),
(18,'Games'),(18,'Live Events'),(18,'Movies'),(18,'Music'),(18,'Reading'),(18,'TV'),(18,'Fitness and Wellness'),(18,'Food and Drinks'),(18,'Arts'),(18,'Home and Garden'),(18,'Pets'),(18,'Politics and Social Issues'),(18,'Travel'),(18,'Vehicles'),(18,'Shopping and Fashion'),(18,'Sports and Outdoors'),(18,'Technology'),
(20,'1,000 - 4,999 Employees'),(20,'10 - 49 Employees'),(20,'100 - 499 Employees'),(20,'5,000+ Employees'),(20,'50 - 99 Employees'),(20,'500 - 999 Employees'),(20,'Less Than 10 Employees'),
(21,'Agriculture'),(21,'Business Services'),(21,'Construction'),(21,'Consumer Services'),(21,'Cultural and Recreation'),(21,'Education'),(21,'Finance'),(21,'Government'),(21,'Healthcare'),(21,'Hospital and Travel'),(21,'Insurance'),(21,'Legal'),(21,'Logistics and Transportation'),(21,'Manufacturing'),(21,'Media and Internet'),(21,'Real Estate'),(21,'Restaurant'),(21,'Retail'),(21,'Telecommunications'),(21,'Wholesale Trade'),
(22,'Executive/C-Suite'),(22,'Mid-Management'),
(25,'African American'),(25,'Asian American'),(25,'Hispanic (US - All)'),(25,'Hispanic (US - Bilingual)'),(25,'Hispanic (US - English Dominant)'),(25,'Hispanic (US - Spanish Dominant)');

insert into campaign_schema_md(schema_name, description) values ('Day','Date of the data.'),
('Ad state','Current status of the ad (e.g., active, paused).'),('Ad type','Format of the ad (e.g., text, image).'),
('Headline 1','Primary ad text for Ad 1'),('Headline 2','Primary ad text for Ad 2'),('Headline 3','Primary ad text for Ad 3'),
('Headline 4','Primary ad text for Ad 4'),('Headline 5','Primary ad text for Ad 5'),
('Description 1','Secondary ad text, provides more information, for Ad 1'),
('Description 2','Secondary ad text, provides more information, for Ad 2'),
('Description 3','Secondary ad text, provides more information, for Ad 3'),
('Description 4','Secondary ad text, provides more information, for Ad 4'),
('Description 5','Secondary ad text, provides more information, for Ad 5'),
('Campaign','Name of the advertising campaign.'),('Ad group','Subset within a campaign, shares targets.'),
('Campaign type','General objective (e.g., sales, leads).'),
('Campaign subtype',' More specific objective (e.g., display, search).'),
('Clicks','Number of times ad was clicked.'),('Impr.',' Impressions, or how often ad was shown.'),
('CTR','Click-through rate, clicks divided by impressions.'),('Currency code','Currency for the accounts billing.'),
('Avg. CPC','Average cost per click.'),('Cost','Total spent on the ad.'),
('Conversions','Completed actions desired from the ad.'),('View-through conv.','Conversions post-view, without direct click.'),
('Cost / conv.','Average cost per conversion.'),('Conv. rate','Percentage of clicks leading to conversion.'),
('Budget','Total budget for the campaign.'),('Budget name','Identifier for the budget.'),
('CPI INR','Cost per interaction in Indian Rupees.'),('Cost / conv INR','Cost per conversion in Indian Rupees.'),
('Gender','Targeted or achieved gender demographic.'),('Age','Targeted or achieved age range.'),
('Asset','Media or text used in the ad.'),('Used by','Where or how the asset is used.'),
('Asset type',' Kind of asset (e.g., image, video).'),('Best','Asset performance rating - highest.'),
('Good','Asset performance rating - above average.'),('Low','Asset performance rating - below average.'),
('Learning','Asset is in the learning phase.'),('Unrated',' Asset has not been rated.'),
('Asset ID','Unique identifier for the asset.'),('All conv. value','Total value derived from all conversions.');

insert into recommendation_summary(orig_opt_ideas, orig_rationale, orig_assets) values ("Increase Bid for Top Performing Keywords", "Implementing the recommended bid adjustments will increase the daily budget by approximately 15%, resulting in a potential increase in overall spend and conversions", "KXHE1838SB");