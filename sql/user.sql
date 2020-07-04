create table "user"
(
  id              serial       not null
    constraint user_pkey
    primary key
);

alter table "user"
  owner to postgres;

create unique index user_id_uindex
  on "user" (id);

