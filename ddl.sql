create database thirdidb;

use thirdidb;

create table client(client_id int(11) not null auto_increment primary key, client_name varchar(16) not null unique,
     status char(4), created date);

create table brand(brand_id int(11) not null auto_increment primary key, brand_name varchar(16) not null unique,
    random_id int(11) unique, email varchar(30), industry varchar(30), description varchar(255), 
    client_id int(11) not null, foreign key (client_id) references client(client_id) on delete cascade);

create table brand_md(id int(11) not null auto_increment primary key, industry varchar(100) not null unique);

create table campaign(campaign_id int(11) not null auto_increment primary key, 
    campaign_name varchar(256) not null unique, goal varchar(50) not null, metric varchar(50), metric_target int(11), 
    upload_details text, media_platform varchar(16), brand_id int(11), status boolean default true, secondary_goal varchar(50),
    foreign key (brand_id) references brand(brand_id) on delete cascade);

create table campaign_goal_md(id int(11) not null auto_increment primary key, goal varchar(50) not null unique);

create table campaign_goal_metrics_md(id int(11) not null auto_increment primary key, 
    key_metrics varchar(50) not null, goal_id int(11) not null,
    foreign key (goal_id) references campaign_goal_md(id) on delete cascade);

create table campaign_sec_goal_md(id int(11) not null auto_increment primary key, secondary_goal varchar(50) not null unique);

create table campaign_targeting_l1_md(id int(11) not null auto_increment primary key, target_level1 varchar(50) not null unique);

create table campaign_targeting_l2_md(id int(11) not null auto_increment primary key, target_level2 varchar(50) not null,
    targeting_l1_id int(11) not null, foreign key (targeting_l1_id) references campaign_targeting_l1_md(id) on delete cascade);

create table campaign_schema_md(campaign_schema_id int(11) not null auto_increment primary key,
    schema_name varchar(30) not null, description varchar(255));
    
create table campaign_targeting(campaign_target_id int(11) not null auto_increment primary key, campaign_id int(11) not null, 
    target_level1 varchar(50) not null, target_level2 varchar(50) not null,
    foreign key (campaign_id) references campaign(campaign_id) on delete cascade);

create table recommendation_raw(id int(11) not null auto_increment primary key,
    original_text mediumtext, created date, revised_text mediumtext, last_updated date, version smallint, prompt text,
    campaign_id int(11), foreign key (campaign_id) references campaign(campaign_id) on delete cascade);

create table recommendation_summary(id int(11) not null auto_increment primary key,
    orig_cluster_name varchar(255), created date, rev_cluster_name varchar(255), last_updated date, version smallint, 
    orig_characteristics varchar(255), rev_characteristics varchar(255), orig_metrics varchar(255), rev_metrics varchar(255), 
    orig_opt_ideas mediumtext, rev_opt_ideas mediumtext, orig_rationale mediumtext, rev_rationale mediumtext,
    orig_metric_current_value int(11), rev_metric_current_value int(11), orig_profile varchar(255), rev_profile varchar(255),
    orig_assets mediumtext, rev_assets mediumtext, campaign_id int(11), recommendation_id int(11),
    foreign key (campaign_id) references campaign(campaign_id) on delete cascade,
    foreign key (recommedation_id) references recommendation_raw(id));

create table recommendation_analysis_activity (id int(11) not null auto_increment primary key,
    status varchar(30), started date, completed date, campaign_id int(11), recommedation_id int(11),
    foreign key (campaign_id) references campaign(campaign_id) on delete cascade,
    foreign key (recommedation_id) references recommendation_raw(id) on delete cascade);