create database thirdidb;

use thirdidb;

create table client(client_id int(11) not null auto_increment primary key, client_name varchar(16) not null unique,
     status char(4), created date);

create table brand(brand_id int(11) not null auto_increment primary key, brand_name varchar(16) not null unique,
    random_id int(11) unique, email varchar(30), industry varchar(30), description varchar(255), 
    client_id int(11) not null, foreign key (client_id) references client(client_id) on delete cascade);

create table campaign(campaign_id int(11) not null auto_increment primary key, 
    campaign_name varchar(256) not null unique, goal varchar(16) not null, metric varchar(16), metric_target int(11), 
    upload_details text, media_platform varchar(16), brand_id int(11), status boolean default true, secondary_goal varchar(16),
    foreign key (brand_id) references brand(brand_id) on delete cascade);

create table campaign_targeting(campaign_target_id int(11) not null primary key, campaign_id int(11) not null, target_level1 varchar(16) not null, target_level2 varchar(16),
    foreign key (campaign_id) references campaign(campaign_id) on delete cascade);

create table recommendation_raw(id int(11) not null auto_increment primary key,
    original_text mediumtext, created date, revised_text mediumtext, last_updated date, version smallint, 
    campaign_id int(11), foreign key (campaign_id) references campaign(campaign_id) on delete cascade);

create table recommendation_summary(id int(11) not null auto_increment primary key,
    original_text mediumtext, created date, revised_text mediumtext, last_updated date, version smallint, 
    campaign_id int(11), recommedation_id int(11),
    foreign key (campaign_id) references campaign(campaign_id) on delete cascade,
    foreign key (recommedation_id) references recommendation_raw(id));

create table insight_summary(id int(11) not null auto_increment primary key,
    original_text mediumtext, created date, revised_text mediumtext, last_updated date, version smallint, 
    campaign_id int(11), recommedation_id int(11),
    foreign key (campaign_id) references campaign(campaign_id) on delete cascade,
    foreign key (recommedation_id) references recommendation_raw(id));

create table recommendation_details (id int(11) not null auto_increment primary key, keyname varchar(16) not null,
    value varchar(16) not null, revised_value varchar(16), recommendation_summary_id int(11),
    foreign key (recommendation_summary_id) references recommendation_summary(id) on delete cascade);

create table insight_details (id int(11) not null auto_increment primary key, keyname varchar(16) not null,
    value varchar(16) not null, revised_valued varchar(16), insight_summary_id int(11),
    foreign key (insight_summary_id) references insight_summary(id) on delete cascade);

create table recommendation_analysis_activity (id int(11) not null auto_increment primary key,
    status varchar(16), started date, completed date, campaign_id int(11), recommedation_id int(11),
    foreign key (campaign_id) references campaign(campaign_id) on delete cascade,
    foreign key (recommedation_id) references recommendation_raw(id) on delete cascade);