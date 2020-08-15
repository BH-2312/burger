USE burgers_db;

insert into burgers (burger_name, devoured)
values ("big bertha burger", false);

insert into burgers (burger_name)
values ("finchy's feast burger");

insert into burgers (burger_name, devoured)
values ("spicy deluxe burger", true);

select * from burgers