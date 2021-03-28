CREATE TABLE users (
    id                      serial primary key,
    first_name              varchar(80) NOT NULL,
    last_name               varchar(80) NOT NULL,
    dob                     DATE,
    email                   VARCHAR(255),
    phone                   varchar(80)
);