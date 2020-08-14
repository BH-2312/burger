USE burgers_db;

insert into burgers (burger_name, devoured)
values ("big bertha", true);

insert into burgers (burger_name)
values ("finchy's feast");

insert into burgers (burger_name, devoured)
values ("spicy deluxe", true);

select * from burgers