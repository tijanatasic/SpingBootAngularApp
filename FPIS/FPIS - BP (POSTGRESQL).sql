PGDMP     :    7                 z            postgres    14.1    14.1 ?    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    13754    postgres    DATABASE     p   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Serbian (Cyrillic)_Serbia.1251';
    DROP DATABASE postgres;
                postgres    false            ?           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3486                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            ?           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            ?            1259    20173    hibernate_sequence    SEQUENCE     {   CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.hibernate_sequence;
       public          postgres    false            ?            1259    20077    jedinica_mere    TABLE     }   CREATE TABLE public.jedinica_mere (
    jedinica_mere_id integer NOT NULL,
    naziv_jedinice_mere character varying(255)
);
 !   DROP TABLE public.jedinica_mere;
       public         heap    postgres    false            ?            1259    20076 "   jedinica_mere_jedinica_mere_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.jedinica_mere_jedinica_mere_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public.jedinica_mere_jedinica_mere_id_seq;
       public          postgres    false    212            ?           0    0 "   jedinica_mere_jedinica_mere_id_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.jedinica_mere_jedinica_mere_id_seq OWNED BY public.jedinica_mere.jedinica_mere_id;
          public          postgres    false    211            ?            1259    20084    kupac    TABLE     ?   CREATE TABLE public.kupac (
    kupac_id integer NOT NULL,
    email character varying(255),
    maticni_broj bigint,
    naziv_kupca character varying(255),
    pib_kupca bigint,
    website character varying(255),
    ziro_racun bigint
);
    DROP TABLE public.kupac;
       public         heap    postgres    false            ?            1259    20083    kupac_kupac_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.kupac_kupac_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.kupac_kupac_id_seq;
       public          postgres    false    214            ?           0    0    kupac_kupac_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.kupac_kupac_id_seq OWNED BY public.kupac.kupac_id;
          public          postgres    false    213            ?            1259    20261    nacin_placanja_seq    SEQUENCE     {   CREATE SEQUENCE public.nacin_placanja_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.nacin_placanja_seq;
       public          postgres    false            ?            1259    20262    nacin_placanja    TABLE     ?   CREATE TABLE public.nacin_placanja (
    nacin_placanja_id integer DEFAULT nextval('public.nacin_placanja_seq'::regclass) NOT NULL,
    naziv character varying(255)
);
 "   DROP TABLE public.nacin_placanja;
       public         heap    postgres    false    236            ?            1259    20100 	   odeljenje    TABLE     q   CREATE TABLE public.odeljenje (
    odeljenje_id integer NOT NULL,
    naziv_odeljenja character varying(255)
);
    DROP TABLE public.odeljenje;
       public         heap    postgres    false            ?            1259    20099    odeljenje_odeljenje_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.odeljenje_odeljenje_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.odeljenje_odeljenje_id_seq;
       public          postgres    false    216            ?           0    0    odeljenje_odeljenje_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.odeljenje_odeljenje_id_seq OWNED BY public.odeljenje.odeljenje_id;
          public          postgres    false    215            ?            1259    20107    otpremnica_za_kupca    TABLE     ?   CREATE TABLE public.otpremnica_za_kupca (
    otpremnica_za_kupca_id integer NOT NULL,
    datum_dopremanja date,
    otpremnicu_primio character varying(255),
    kupac__id integer,
    radnik_id_doprema integer,
    radnik_id_izdao integer
);
 '   DROP TABLE public.otpremnica_za_kupca;
       public         heap    postgres    false            ?            1259    20106 .   otpremnica_za_kupca_otpremnica_za_kupca_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.otpremnica_za_kupca_otpremnica_za_kupca_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 E   DROP SEQUENCE public.otpremnica_za_kupca_otpremnica_za_kupca_id_seq;
       public          postgres    false    218            ?           0    0 .   otpremnica_za_kupca_otpremnica_za_kupca_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.otpremnica_za_kupca_otpremnica_za_kupca_id_seq OWNED BY public.otpremnica_za_kupca.otpremnica_za_kupca_id;
          public          postgres    false    217            ?            1259    20113    potrvda_o_kvalitetu    TABLE     c  CREATE TABLE public.potrvda_o_kvalitetu (
    datum_potvrde date,
    mesto_izdavanja character varying(255),
    opis_potvrde character varying(255),
    vrsta_robe character varying(255),
    kupac_id integer,
    proizvod_id integer,
    veterinar_id integer,
    zahtev_za_proverom_kvaliteta_id integer,
    potvrda_o_kvalitetu_id integer NOT NULL
);
 '   DROP TABLE public.potrvda_o_kvalitetu;
       public         heap    postgres    false            ?            1259    20357 /   potrvda_o_kvalitetu_potvrda_o_kvalitetu_id_seq1    SEQUENCE     ?   CREATE SEQUENCE public.potrvda_o_kvalitetu_potvrda_o_kvalitetu_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 F   DROP SEQUENCE public.potrvda_o_kvalitetu_potvrda_o_kvalitetu_id_seq1;
       public          postgres    false    219            ?           0    0 /   potrvda_o_kvalitetu_potvrda_o_kvalitetu_id_seq1    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.potrvda_o_kvalitetu_potvrda_o_kvalitetu_id_seq1 OWNED BY public.potrvda_o_kvalitetu.potvrda_o_kvalitetu_id;
          public          postgres    false    243            ?            1259    20278    potrvda_o_kvalitetu_seq    SEQUENCE     ?   CREATE SEQUENCE public.potrvda_o_kvalitetu_seq
    START WITH 7
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.potrvda_o_kvalitetu_seq;
       public          postgres    false            ?            1259    20333    potrvda_o_kvalitetu_sequence    SEQUENCE     ?   CREATE SEQUENCE public.potrvda_o_kvalitetu_sequence
    START WITH 8
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 3   DROP SEQUENCE public.potrvda_o_kvalitetu_sequence;
       public          postgres    false            ?            1259    16584    potvrda_seq    SEQUENCE     t   CREATE SEQUENCE public.potvrda_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.potvrda_seq;
       public          postgres    false            ?            1259    20367    potvrda_sequ    SEQUENCE     u   CREATE SEQUENCE public.potvrda_sequ
    START WITH 5
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.potvrda_sequ;
       public          postgres    false            ?            1259    20366    potvrda_sequence    SEQUENCE     y   CREATE SEQUENCE public.potvrda_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.potvrda_sequence;
       public          postgres    false            ?            1259    20121    proizvod    TABLE       CREATE TABLE public.proizvod (
    proizvod_id integer NOT NULL,
    cena double precision,
    datum_proizvodnje date,
    naziv_proizvoda character varying(255),
    trenutno_stanje_zaliha integer,
    jedinica_mere_id integer,
    tip_proizvoda_id integer
);
    DROP TABLE public.proizvod;
       public         heap    postgres    false            ?            1259    20120    proizvod_proizvod_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.proizvod_proizvod_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.proizvod_proizvod_id_seq;
       public          postgres    false    221            ?           0    0    proizvod_proizvod_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.proizvod_proizvod_id_seq OWNED BY public.proizvod.proizvod_id;
          public          postgres    false    220            ?            1259    20128    racun_kupca    TABLE     ?   CREATE TABLE public.racun_kupca (
    racun_kupca_id integer NOT NULL,
    napomena_racuna_kupca character varying(255),
    rok_placanja_kupca date,
    kupac_id integer,
    otpremnica_za_kupca_id integer,
    radink_id integer
);
    DROP TABLE public.racun_kupca;
       public         heap    postgres    false            ?            1259    20127    racun_kupca_racun_kupca_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.racun_kupca_racun_kupca_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.racun_kupca_racun_kupca_id_seq;
       public          postgres    false    223            ?           0    0    racun_kupca_racun_kupca_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.racun_kupca_racun_kupca_id_seq OWNED BY public.racun_kupca.racun_kupca_id;
          public          postgres    false    222            ?            1259    20135    radnik    TABLE     ?   CREATE TABLE public.radnik (
    radnik_id integer NOT NULL,
    broj_radne_knjizice bigint,
    ime_prezime character varying(255),
    jmbg bigint,
    radno_mesto_id integer
);
    DROP TABLE public.radnik;
       public         heap    postgres    false            ?            1259    20134    radnik_radnik_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.radnik_radnik_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.radnik_radnik_id_seq;
       public          postgres    false    225            ?           0    0    radnik_radnik_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.radnik_radnik_id_seq OWNED BY public.radnik.radnik_id;
          public          postgres    false    224            ?            1259    20142    radno_mesto    TABLE     ?   CREATE TABLE public.radno_mesto (
    radno_mesto_id integer NOT NULL,
    naziv_radnog_mesta character varying(255),
    opis_radnog_mesta character varying(255),
    odeljenje_id integer
);
    DROP TABLE public.radno_mesto;
       public         heap    postgres    false            ?            1259    20141    radno_mesto_radno_mesto_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.radno_mesto_radno_mesto_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.radno_mesto_radno_mesto_id_seq;
       public          postgres    false    227            ?           0    0    radno_mesto_radno_mesto_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.radno_mesto_radno_mesto_id_seq OWNED BY public.radno_mesto.radno_mesto_id;
          public          postgres    false    226            ?            1259    20300 	   realizuje    TABLE     ]   CREATE TABLE public.realizuje (
    racun_kupca_id integer,
    nacin_placanja_id integer
);
    DROP TABLE public.realizuje;
       public         heap    postgres    false            ?            1259    20303    stavka_racuna_kupca    TABLE     ?   CREATE TABLE public.stavka_racuna_kupca (
    racun_kupca_id integer NOT NULL,
    stavka_racuna_id integer NOT NULL,
    kolicina_robe_za_placanja integer,
    rabat double precision,
    cena_sa_popustom double precision,
    proizvod_id integer
);
 '   DROP TABLE public.stavka_racuna_kupca;
       public         heap    postgres    false            ?            1259    20337    stavka_racuna_seq    SEQUENCE     z   CREATE SEQUENCE public.stavka_racuna_seq
    START WITH 4
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.stavka_racuna_seq;
       public          postgres    false            ?            1259    20151    tip_proizvoda    TABLE     ~   CREATE TABLE public.tip_proizvoda (
    tip_proizvoda_id integer NOT NULL,
    naziv_tipa_proizvoda character varying(255)
);
 !   DROP TABLE public.tip_proizvoda;
       public         heap    postgres    false            ?            1259    20150 "   tip_proizvoda_tip_proizvoda_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.tip_proizvoda_tip_proizvoda_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public.tip_proizvoda_tip_proizvoda_id_seq;
       public          postgres    false    229            ?           0    0 "   tip_proizvoda_tip_proizvoda_id_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.tip_proizvoda_tip_proizvoda_id_seq OWNED BY public.tip_proizvoda.tip_proizvoda_id;
          public          postgres    false    228            ?            1259    20389    users    TABLE     w   CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying,
    password character varying
);
    DROP TABLE public.users;
       public         heap    postgres    false            ?            1259    20388    user_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    247            ?           0    0    user_id_seq    SEQUENCE OWNED BY     <   ALTER SEQUENCE public.user_id_seq OWNED BY public.users.id;
          public          postgres    false    246            ?            1259    20158 	   veterinar    TABLE     ?   CREATE TABLE public.veterinar (
    veterinar_id integer NOT NULL,
    email character varying(255),
    maticni_broj bigint,
    naziv_firme character varying(255),
    pib bigint,
    website character varying(255),
    ziro_racun bigint
);
    DROP TABLE public.veterinar;
       public         heap    postgres    false            ?            1259    20157    veterinar_veterinar_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.veterinar_veterinar_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.veterinar_veterinar_id_seq;
       public          postgres    false    231            ?           0    0    veterinar_veterinar_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.veterinar_veterinar_id_seq OWNED BY public.veterinar.veterinar_id;
          public          postgres    false    230            ?            1259    20260    zahtev_za_potvrdom    SEQUENCE     {   CREATE SEQUENCE public.zahtev_za_potvrdom
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.zahtev_za_potvrdom;
       public          postgres    false            ?            1259    20167    zahtev_za_proverom_kvaliteta    TABLE     ?   CREATE TABLE public.zahtev_za_proverom_kvaliteta (
    zahtev_za_proverom_kvaliteta_id integer NOT NULL,
    datum date,
    napomena character varying(255),
    kupac_id integer,
    proizvod_id integer,
    veterinar_id integer
);
 0   DROP TABLE public.zahtev_za_proverom_kvaliteta;
       public         heap    postgres    false            ?            1259    20166 ?   zahtev_za_proverom_kvaliteta_zahtev_za_proverom_kvaliteta_i_seq    SEQUENCE     ?   CREATE SEQUENCE public.zahtev_za_proverom_kvaliteta_zahtev_za_proverom_kvaliteta_i_seq
    AS integer
    START WITH 7
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 V   DROP SEQUENCE public.zahtev_za_proverom_kvaliteta_zahtev_za_proverom_kvaliteta_i_seq;
       public          postgres    false    233            ?           0    0 ?   zahtev_za_proverom_kvaliteta_zahtev_za_proverom_kvaliteta_i_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.zahtev_za_proverom_kvaliteta_zahtev_za_proverom_kvaliteta_i_seq OWNED BY public.zahtev_za_proverom_kvaliteta.zahtev_za_proverom_kvaliteta_id;
          public          postgres    false    232            ?           2604    20080    jedinica_mere jedinica_mere_id    DEFAULT     ?   ALTER TABLE ONLY public.jedinica_mere ALTER COLUMN jedinica_mere_id SET DEFAULT nextval('public.jedinica_mere_jedinica_mere_id_seq'::regclass);
 M   ALTER TABLE public.jedinica_mere ALTER COLUMN jedinica_mere_id DROP DEFAULT;
       public          postgres    false    211    212    212            ?           2604    20087    kupac kupac_id    DEFAULT     p   ALTER TABLE ONLY public.kupac ALTER COLUMN kupac_id SET DEFAULT nextval('public.kupac_kupac_id_seq'::regclass);
 =   ALTER TABLE public.kupac ALTER COLUMN kupac_id DROP DEFAULT;
       public          postgres    false    213    214    214            ?           2604    20103    odeljenje odeljenje_id    DEFAULT     ?   ALTER TABLE ONLY public.odeljenje ALTER COLUMN odeljenje_id SET DEFAULT nextval('public.odeljenje_odeljenje_id_seq'::regclass);
 E   ALTER TABLE public.odeljenje ALTER COLUMN odeljenje_id DROP DEFAULT;
       public          postgres    false    216    215    216            ?           2604    20110 *   otpremnica_za_kupca otpremnica_za_kupca_id    DEFAULT     ?   ALTER TABLE ONLY public.otpremnica_za_kupca ALTER COLUMN otpremnica_za_kupca_id SET DEFAULT nextval('public.otpremnica_za_kupca_otpremnica_za_kupca_id_seq'::regclass);
 Y   ALTER TABLE public.otpremnica_za_kupca ALTER COLUMN otpremnica_za_kupca_id DROP DEFAULT;
       public          postgres    false    218    217    218            ?           2604    20124    proizvod proizvod_id    DEFAULT     |   ALTER TABLE ONLY public.proizvod ALTER COLUMN proizvod_id SET DEFAULT nextval('public.proizvod_proizvod_id_seq'::regclass);
 C   ALTER TABLE public.proizvod ALTER COLUMN proizvod_id DROP DEFAULT;
       public          postgres    false    221    220    221            ?           2604    20138    radnik radnik_id    DEFAULT     t   ALTER TABLE ONLY public.radnik ALTER COLUMN radnik_id SET DEFAULT nextval('public.radnik_radnik_id_seq'::regclass);
 ?   ALTER TABLE public.radnik ALTER COLUMN radnik_id DROP DEFAULT;
       public          postgres    false    225    224    225            ?           2604    20145    radno_mesto radno_mesto_id    DEFAULT     ?   ALTER TABLE ONLY public.radno_mesto ALTER COLUMN radno_mesto_id SET DEFAULT nextval('public.radno_mesto_radno_mesto_id_seq'::regclass);
 I   ALTER TABLE public.radno_mesto ALTER COLUMN radno_mesto_id DROP DEFAULT;
       public          postgres    false    226    227    227            ?           2604    20154    tip_proizvoda tip_proizvoda_id    DEFAULT     ?   ALTER TABLE ONLY public.tip_proizvoda ALTER COLUMN tip_proizvoda_id SET DEFAULT nextval('public.tip_proizvoda_tip_proizvoda_id_seq'::regclass);
 M   ALTER TABLE public.tip_proizvoda ALTER COLUMN tip_proizvoda_id DROP DEFAULT;
       public          postgres    false    229    228    229            ?           2604    20392    users id    DEFAULT     c   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    246    247    247            ?           2604    20161    veterinar veterinar_id    DEFAULT     ?   ALTER TABLE ONLY public.veterinar ALTER COLUMN veterinar_id SET DEFAULT nextval('public.veterinar_veterinar_id_seq'::regclass);
 E   ALTER TABLE public.veterinar ALTER COLUMN veterinar_id DROP DEFAULT;
       public          postgres    false    230    231    231            ?           2604    20170 <   zahtev_za_proverom_kvaliteta zahtev_za_proverom_kvaliteta_id    DEFAULT     ?   ALTER TABLE ONLY public.zahtev_za_proverom_kvaliteta ALTER COLUMN zahtev_za_proverom_kvaliteta_id SET DEFAULT nextval('public.zahtev_za_proverom_kvaliteta_zahtev_za_proverom_kvaliteta_i_seq'::regclass);
 k   ALTER TABLE public.zahtev_za_proverom_kvaliteta ALTER COLUMN zahtev_za_proverom_kvaliteta_id DROP DEFAULT;
       public          postgres    false    233    232    233            u          0    20077    jedinica_mere 
   TABLE DATA           N   COPY public.jedinica_mere (jedinica_mere_id, naziv_jedinice_mere) FROM stdin;
    public          postgres    false    212   ??       w          0    20084    kupac 
   TABLE DATA           k   COPY public.kupac (kupac_id, email, maticni_broj, naziv_kupca, pib_kupca, website, ziro_racun) FROM stdin;
    public          postgres    false    214   ??       ?          0    20262    nacin_placanja 
   TABLE DATA           B   COPY public.nacin_placanja (nacin_placanja_id, naziv) FROM stdin;
    public          postgres    false    237   Z?       y          0    20100 	   odeljenje 
   TABLE DATA           B   COPY public.odeljenje (odeljenje_id, naziv_odeljenja) FROM stdin;
    public          postgres    false    216   ??       {          0    20107    otpremnica_za_kupca 
   TABLE DATA           ?   COPY public.otpremnica_za_kupca (otpremnica_za_kupca_id, datum_dopremanja, otpremnicu_primio, kupac__id, radnik_id_doprema, radnik_id_izdao) FROM stdin;
    public          postgres    false    218   г       |          0    20113    potrvda_o_kvalitetu 
   TABLE DATA           ?   COPY public.potrvda_o_kvalitetu (datum_potvrde, mesto_izdavanja, opis_potvrde, vrsta_robe, kupac_id, proizvod_id, veterinar_id, zahtev_za_proverom_kvaliteta_id, potvrda_o_kvalitetu_id) FROM stdin;
    public          postgres    false    219   $?       ~          0    20121    proizvod 
   TABLE DATA           ?   COPY public.proizvod (proizvod_id, cena, datum_proizvodnje, naziv_proizvoda, trenutno_stanje_zaliha, jedinica_mere_id, tip_proizvoda_id) FROM stdin;
    public          postgres    false    221   ??       ?          0    20128    racun_kupca 
   TABLE DATA           ?   COPY public.racun_kupca (racun_kupca_id, napomena_racuna_kupca, rok_placanja_kupca, kupac_id, otpremnica_za_kupca_id, radink_id) FROM stdin;
    public          postgres    false    223   R?       ?          0    20135    radnik 
   TABLE DATA           c   COPY public.radnik (radnik_id, broj_radne_knjizice, ime_prezime, jmbg, radno_mesto_id) FROM stdin;
    public          postgres    false    225   ͵       ?          0    20142    radno_mesto 
   TABLE DATA           j   COPY public.radno_mesto (radno_mesto_id, naziv_radnog_mesta, opis_radnog_mesta, odeljenje_id) FROM stdin;
    public          postgres    false    227   V?       ?          0    20300 	   realizuje 
   TABLE DATA           F   COPY public.realizuje (racun_kupca_id, nacin_placanja_id) FROM stdin;
    public          postgres    false    239   ??       ?          0    20303    stavka_racuna_kupca 
   TABLE DATA           ?   COPY public.stavka_racuna_kupca (racun_kupca_id, stavka_racuna_id, kolicina_robe_za_placanja, rabat, cena_sa_popustom, proizvod_id) FROM stdin;
    public          postgres    false    240   ??       ?          0    20151    tip_proizvoda 
   TABLE DATA           O   COPY public.tip_proizvoda (tip_proizvoda_id, naziv_tipa_proizvoda) FROM stdin;
    public          postgres    false    229   o?       ?          0    20389    users 
   TABLE DATA           7   COPY public.users (id, username, password) FROM stdin;
    public          postgres    false    247   ??       ?          0    20158 	   veterinar 
   TABLE DATA           m   COPY public.veterinar (veterinar_id, email, maticni_broj, naziv_firme, pib, website, ziro_racun) FROM stdin;
    public          postgres    false    231   ̷       ?          0    20167    zahtev_za_proverom_kvaliteta 
   TABLE DATA           ?   COPY public.zahtev_za_proverom_kvaliteta (zahtev_za_proverom_kvaliteta_id, datum, napomena, kupac_id, proizvod_id, veterinar_id) FROM stdin;
    public          postgres    false    233   n?       ?           0    0    hibernate_sequence    SEQUENCE SET     A   SELECT pg_catalog.setval('public.hibernate_sequence', 94, true);
          public          postgres    false    234            ?           0    0 "   jedinica_mere_jedinica_mere_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.jedinica_mere_jedinica_mere_id_seq', 8, true);
          public          postgres    false    211            ?           0    0    kupac_kupac_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.kupac_kupac_id_seq', 7, true);
          public          postgres    false    213            ?           0    0    nacin_placanja_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.nacin_placanja_seq', 2, true);
          public          postgres    false    236            ?           0    0    odeljenje_odeljenje_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.odeljenje_odeljenje_id_seq', 10, true);
          public          postgres    false    215            ?           0    0 .   otpremnica_za_kupca_otpremnica_za_kupca_id_seq    SEQUENCE SET     \   SELECT pg_catalog.setval('public.otpremnica_za_kupca_otpremnica_za_kupca_id_seq', 9, true);
          public          postgres    false    217            ?           0    0 /   potrvda_o_kvalitetu_potvrda_o_kvalitetu_id_seq1    SEQUENCE SET     ^   SELECT pg_catalog.setval('public.potrvda_o_kvalitetu_potvrda_o_kvalitetu_id_seq1', 5, false);
          public          postgres    false    243            ?           0    0    potrvda_o_kvalitetu_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.potrvda_o_kvalitetu_seq', 5, true);
          public          postgres    false    238            ?           0    0    potrvda_o_kvalitetu_sequence    SEQUENCE SET     K   SELECT pg_catalog.setval('public.potrvda_o_kvalitetu_sequence', 2, false);
          public          postgres    false    241            ?           0    0    potvrda_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.potvrda_seq', 2, true);
          public          postgres    false    210            ?           0    0    potvrda_sequ    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.potvrda_sequ', 5, false);
          public          postgres    false    245            ?           0    0    potvrda_sequence    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.potvrda_sequence', 1, false);
          public          postgres    false    244            ?           0    0    proizvod_proizvod_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.proizvod_proizvod_id_seq', 8, true);
          public          postgres    false    220            ?           0    0    racun_kupca_racun_kupca_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.racun_kupca_racun_kupca_id_seq', 9, true);
          public          postgres    false    222            ?           0    0    radnik_radnik_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.radnik_radnik_id_seq', 8, true);
          public          postgres    false    224            ?           0    0    radno_mesto_radno_mesto_id_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.radno_mesto_radno_mesto_id_seq', 11, true);
          public          postgres    false    226            ?           0    0    stavka_racuna_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.stavka_racuna_seq', 9, true);
          public          postgres    false    242            ?           0    0 "   tip_proizvoda_tip_proizvoda_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.tip_proizvoda_tip_proizvoda_id_seq', 9, true);
          public          postgres    false    228            ?           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 1, true);
          public          postgres    false    246            ?           0    0    veterinar_veterinar_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.veterinar_veterinar_id_seq', 7, true);
          public          postgres    false    230            ?           0    0    zahtev_za_potvrdom    SEQUENCE SET     A   SELECT pg_catalog.setval('public.zahtev_za_potvrdom', 1, false);
          public          postgres    false    235            ?           0    0 ?   zahtev_za_proverom_kvaliteta_zahtev_za_proverom_kvaliteta_i_seq    SEQUENCE SET     n   SELECT pg_catalog.setval('public.zahtev_za_proverom_kvaliteta_zahtev_za_proverom_kvaliteta_i_seq', 15, true);
          public          postgres    false    232            ?           2606    20082     jedinica_mere jedinica_mere_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.jedinica_mere
    ADD CONSTRAINT jedinica_mere_pkey PRIMARY KEY (jedinica_mere_id);
 J   ALTER TABLE ONLY public.jedinica_mere DROP CONSTRAINT jedinica_mere_pkey;
       public            postgres    false    212            ?           2606    20091    kupac kupac_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.kupac
    ADD CONSTRAINT kupac_pkey PRIMARY KEY (kupac_id);
 :   ALTER TABLE ONLY public.kupac DROP CONSTRAINT kupac_pkey;
       public            postgres    false    214            ?           2606    20325     nacin_placanja nacin_placanja_pk 
   CONSTRAINT     m   ALTER TABLE ONLY public.nacin_placanja
    ADD CONSTRAINT nacin_placanja_pk PRIMARY KEY (nacin_placanja_id);
 J   ALTER TABLE ONLY public.nacin_placanja DROP CONSTRAINT nacin_placanja_pk;
       public            postgres    false    237            ?           2606    20105    odeljenje odeljenje_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.odeljenje
    ADD CONSTRAINT odeljenje_pkey PRIMARY KEY (odeljenje_id);
 B   ALTER TABLE ONLY public.odeljenje DROP CONSTRAINT odeljenje_pkey;
       public            postgres    false    216            ?           2606    20112 ,   otpremnica_za_kupca otpremnica_za_kupca_pkey 
   CONSTRAINT     ~   ALTER TABLE ONLY public.otpremnica_za_kupca
    ADD CONSTRAINT otpremnica_za_kupca_pkey PRIMARY KEY (otpremnica_za_kupca_id);
 V   ALTER TABLE ONLY public.otpremnica_za_kupca DROP CONSTRAINT otpremnica_za_kupca_pkey;
       public            postgres    false    218            ?           2606    20126    proizvod proizvod_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.proizvod
    ADD CONSTRAINT proizvod_pkey PRIMARY KEY (proizvod_id);
 @   ALTER TABLE ONLY public.proizvod DROP CONSTRAINT proizvod_pkey;
       public            postgres    false    221            ?           2606    20377    racun_kupca racun_kupca_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.racun_kupca
    ADD CONSTRAINT racun_kupca_pkey PRIMARY KEY (racun_kupca_id);
 F   ALTER TABLE ONLY public.racun_kupca DROP CONSTRAINT racun_kupca_pkey;
       public            postgres    false    223            ?           2606    20140    radnik radnik_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public.radnik
    ADD CONSTRAINT radnik_pkey PRIMARY KEY (radnik_id);
 <   ALTER TABLE ONLY public.radnik DROP CONSTRAINT radnik_pkey;
       public            postgres    false    225            ?           2606    20149    radno_mesto radno_mesto_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.radno_mesto
    ADD CONSTRAINT radno_mesto_pkey PRIMARY KEY (radno_mesto_id);
 F   ALTER TABLE ONLY public.radno_mesto DROP CONSTRAINT radno_mesto_pkey;
       public            postgres    false    227            ?           2606    20156     tip_proizvoda tip_proizvoda_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.tip_proizvoda
    ADD CONSTRAINT tip_proizvoda_pkey PRIMARY KEY (tip_proizvoda_id);
 J   ALTER TABLE ONLY public.tip_proizvoda DROP CONSTRAINT tip_proizvoda_pkey;
       public            postgres    false    229            ?           2606    20165    veterinar veterinar_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.veterinar
    ADD CONSTRAINT veterinar_pkey PRIMARY KEY (veterinar_id);
 B   ALTER TABLE ONLY public.veterinar DROP CONSTRAINT veterinar_pkey;
       public            postgres    false    231            ?           2606    20172 >   zahtev_za_proverom_kvaliteta zahtev_za_proverom_kvaliteta_pkey 
   CONSTRAINT     ?   ALTER TABLE ONLY public.zahtev_za_proverom_kvaliteta
    ADD CONSTRAINT zahtev_za_proverom_kvaliteta_pkey PRIMARY KEY (zahtev_za_proverom_kvaliteta_id);
 h   ALTER TABLE ONLY public.zahtev_za_proverom_kvaliteta DROP CONSTRAINT zahtev_za_proverom_kvaliteta_pkey;
       public            postgres    false    233            ?           2606    20219 '   racun_kupca fk1v141dy32u26g077ugkuefhui    FK CONSTRAINT     ?   ALTER TABLE ONLY public.racun_kupca
    ADD CONSTRAINT fk1v141dy32u26g077ugkuefhui FOREIGN KEY (kupac_id) REFERENCES public.kupac(kupac_id);
 Q   ALTER TABLE ONLY public.racun_kupca DROP CONSTRAINT fk1v141dy32u26g077ugkuefhui;
       public          postgres    false    3261    214    223            ?           2606    20234 "   radnik fk24m1r8owsry52v3w8educ4o5u    FK CONSTRAINT     ?   ALTER TABLE ONLY public.radnik
    ADD CONSTRAINT fk24m1r8owsry52v3w8educ4o5u FOREIGN KEY (radno_mesto_id) REFERENCES public.radno_mesto(radno_mesto_id);
 L   ALTER TABLE ONLY public.radnik DROP CONSTRAINT fk24m1r8owsry52v3w8educ4o5u;
       public          postgres    false    3273    225    227            ?           2606    20239 '   radno_mesto fk2sbkxlfkdw7fcog0e3ein5mrb    FK CONSTRAINT     ?   ALTER TABLE ONLY public.radno_mesto
    ADD CONSTRAINT fk2sbkxlfkdw7fcog0e3ein5mrb FOREIGN KEY (odeljenje_id) REFERENCES public.odeljenje(odeljenje_id);
 Q   ALTER TABLE ONLY public.radno_mesto DROP CONSTRAINT fk2sbkxlfkdw7fcog0e3ein5mrb;
       public          postgres    false    216    3263    227            ?           2606    20224 '   racun_kupca fk3b7s6ad6w9edaslw56midlrsh    FK CONSTRAINT     ?   ALTER TABLE ONLY public.racun_kupca
    ADD CONSTRAINT fk3b7s6ad6w9edaslw56midlrsh FOREIGN KEY (otpremnica_za_kupca_id) REFERENCES public.otpremnica_za_kupca(otpremnica_za_kupca_id);
 Q   ALTER TABLE ONLY public.racun_kupca DROP CONSTRAINT fk3b7s6ad6w9edaslw56midlrsh;
       public          postgres    false    3265    218    223            ?           2606    20194 /   potrvda_o_kvalitetu fk530aryjhg3po2dhx5p9h8u4jv    FK CONSTRAINT     ?   ALTER TABLE ONLY public.potrvda_o_kvalitetu
    ADD CONSTRAINT fk530aryjhg3po2dhx5p9h8u4jv FOREIGN KEY (proizvod_id) REFERENCES public.proizvod(proizvod_id);
 Y   ALTER TABLE ONLY public.potrvda_o_kvalitetu DROP CONSTRAINT fk530aryjhg3po2dhx5p9h8u4jv;
       public          postgres    false    3267    221    219            ?           2606    20249 8   zahtev_za_proverom_kvaliteta fk8o0gl661u1944ls4esqqy5fjf    FK CONSTRAINT     ?   ALTER TABLE ONLY public.zahtev_za_proverom_kvaliteta
    ADD CONSTRAINT fk8o0gl661u1944ls4esqqy5fjf FOREIGN KEY (proizvod_id) REFERENCES public.proizvod(proizvod_id);
 b   ALTER TABLE ONLY public.zahtev_za_proverom_kvaliteta DROP CONSTRAINT fk8o0gl661u1944ls4esqqy5fjf;
       public          postgres    false    3267    233    221            ?           2606    20209 $   proizvod fkfq9k2eibt8rn415o3sxmjkddu    FK CONSTRAINT     ?   ALTER TABLE ONLY public.proizvod
    ADD CONSTRAINT fkfq9k2eibt8rn415o3sxmjkddu FOREIGN KEY (jedinica_mere_id) REFERENCES public.jedinica_mere(jedinica_mere_id);
 N   ALTER TABLE ONLY public.proizvod DROP CONSTRAINT fkfq9k2eibt8rn415o3sxmjkddu;
       public          postgres    false    3259    212    221            ?           2606    20254 8   zahtev_za_proverom_kvaliteta fkfy136sl9033ph5dcci1t4wm0m    FK CONSTRAINT     ?   ALTER TABLE ONLY public.zahtev_za_proverom_kvaliteta
    ADD CONSTRAINT fkfy136sl9033ph5dcci1t4wm0m FOREIGN KEY (veterinar_id) REFERENCES public.veterinar(veterinar_id);
 b   ALTER TABLE ONLY public.zahtev_za_proverom_kvaliteta DROP CONSTRAINT fkfy136sl9033ph5dcci1t4wm0m;
       public          postgres    false    233    231    3277            ?           2606    20214 $   proizvod fkgryefhuhftlr7gyu0yrk5wqcq    FK CONSTRAINT     ?   ALTER TABLE ONLY public.proizvod
    ADD CONSTRAINT fkgryefhuhftlr7gyu0yrk5wqcq FOREIGN KEY (tip_proizvoda_id) REFERENCES public.tip_proizvoda(tip_proizvoda_id);
 N   ALTER TABLE ONLY public.proizvod DROP CONSTRAINT fkgryefhuhftlr7gyu0yrk5wqcq;
       public          postgres    false    3275    229    221            ?           2606    20184 /   otpremnica_za_kupca fkgtoxjrql5xfelcthk7jt248rh    FK CONSTRAINT     ?   ALTER TABLE ONLY public.otpremnica_za_kupca
    ADD CONSTRAINT fkgtoxjrql5xfelcthk7jt248rh FOREIGN KEY (radnik_id_izdao) REFERENCES public.radnik(radnik_id);
 Y   ALTER TABLE ONLY public.otpremnica_za_kupca DROP CONSTRAINT fkgtoxjrql5xfelcthk7jt248rh;
       public          postgres    false    3271    225    218            ?           2606    20326 %   realizuje fkh5x9tjo8hfca5d9ujt9b9m0sf    FK CONSTRAINT     ?   ALTER TABLE ONLY public.realizuje
    ADD CONSTRAINT fkh5x9tjo8hfca5d9ujt9b9m0sf FOREIGN KEY (nacin_placanja_id) REFERENCES public.nacin_placanja(nacin_placanja_id);
 O   ALTER TABLE ONLY public.realizuje DROP CONSTRAINT fkh5x9tjo8hfca5d9ujt9b9m0sf;
       public          postgres    false    3281    239    237            ?           2606    20174 /   otpremnica_za_kupca fkhphqb24ygrumcahrlwwu6k22i    FK CONSTRAINT     ?   ALTER TABLE ONLY public.otpremnica_za_kupca
    ADD CONSTRAINT fkhphqb24ygrumcahrlwwu6k22i FOREIGN KEY (kupac__id) REFERENCES public.kupac(kupac_id);
 Y   ALTER TABLE ONLY public.otpremnica_za_kupca DROP CONSTRAINT fkhphqb24ygrumcahrlwwu6k22i;
       public          postgres    false    218    3261    214            ?           2606    20204 /   potrvda_o_kvalitetu fkhvpjfghp8x5y5gkcqnh7vuu0a    FK CONSTRAINT     ?   ALTER TABLE ONLY public.potrvda_o_kvalitetu
    ADD CONSTRAINT fkhvpjfghp8x5y5gkcqnh7vuu0a FOREIGN KEY (zahtev_za_proverom_kvaliteta_id) REFERENCES public.zahtev_za_proverom_kvaliteta(zahtev_za_proverom_kvaliteta_id);
 Y   ALTER TABLE ONLY public.potrvda_o_kvalitetu DROP CONSTRAINT fkhvpjfghp8x5y5gkcqnh7vuu0a;
       public          postgres    false    3279    233    219            ?           2606    20199 /   potrvda_o_kvalitetu fkhxx24s2f2lif2xk8jm0raempl    FK CONSTRAINT     ?   ALTER TABLE ONLY public.potrvda_o_kvalitetu
    ADD CONSTRAINT fkhxx24s2f2lif2xk8jm0raempl FOREIGN KEY (veterinar_id) REFERENCES public.veterinar(veterinar_id);
 Y   ALTER TABLE ONLY public.potrvda_o_kvalitetu DROP CONSTRAINT fkhxx24s2f2lif2xk8jm0raempl;
       public          postgres    false    3277    231    219            ?           2606    20179 /   otpremnica_za_kupca fkl4f4fd2vrq6q5s7y2m01e1kqb    FK CONSTRAINT     ?   ALTER TABLE ONLY public.otpremnica_za_kupca
    ADD CONSTRAINT fkl4f4fd2vrq6q5s7y2m01e1kqb FOREIGN KEY (radnik_id_doprema) REFERENCES public.radnik(radnik_id);
 Y   ALTER TABLE ONLY public.otpremnica_za_kupca DROP CONSTRAINT fkl4f4fd2vrq6q5s7y2m01e1kqb;
       public          postgres    false    225    218    3271            ?           2606    20189 /   potrvda_o_kvalitetu fklshl32p6eu517wvavnucc69d0    FK CONSTRAINT     ?   ALTER TABLE ONLY public.potrvda_o_kvalitetu
    ADD CONSTRAINT fklshl32p6eu517wvavnucc69d0 FOREIGN KEY (kupac_id) REFERENCES public.kupac(kupac_id);
 Y   ALTER TABLE ONLY public.potrvda_o_kvalitetu DROP CONSTRAINT fklshl32p6eu517wvavnucc69d0;
       public          postgres    false    3261    214    219            ?           2606    20244 8   zahtev_za_proverom_kvaliteta fknsku1uabbxkys7ff7px14j49p    FK CONSTRAINT     ?   ALTER TABLE ONLY public.zahtev_za_proverom_kvaliteta
    ADD CONSTRAINT fknsku1uabbxkys7ff7px14j49p FOREIGN KEY (kupac_id) REFERENCES public.kupac(kupac_id);
 b   ALTER TABLE ONLY public.zahtev_za_proverom_kvaliteta DROP CONSTRAINT fknsku1uabbxkys7ff7px14j49p;
       public          postgres    false    233    214    3261            ?           2606    20229 '   racun_kupca fkrbgb2bwy650nn19ivr0hjgtkv    FK CONSTRAINT     ?   ALTER TABLE ONLY public.racun_kupca
    ADD CONSTRAINT fkrbgb2bwy650nn19ivr0hjgtkv FOREIGN KEY (radink_id) REFERENCES public.radnik(radnik_id);
 Q   ALTER TABLE ONLY public.racun_kupca DROP CONSTRAINT fkrbgb2bwy650nn19ivr0hjgtkv;
       public          postgres    false    223    3271    225            ?           2606    20383 %   realizuje fkt3ranq85ukqbxo2ovavfhyk9j    FK CONSTRAINT     ?   ALTER TABLE ONLY public.realizuje
    ADD CONSTRAINT fkt3ranq85ukqbxo2ovavfhyk9j FOREIGN KEY (racun_kupca_id) REFERENCES public.racun_kupca(racun_kupca_id);
 O   ALTER TABLE ONLY public.realizuje DROP CONSTRAINT fkt3ranq85ukqbxo2ovavfhyk9j;
       public          postgres    false    223    239    3269            ?           2606    20370 *   potrvda_o_kvalitetu potrvda_o_kvalitetu_fk    FK CONSTRAINT     ?   ALTER TABLE ONLY public.potrvda_o_kvalitetu
    ADD CONSTRAINT potrvda_o_kvalitetu_fk FOREIGN KEY (zahtev_za_proverom_kvaliteta_id) REFERENCES public.zahtev_za_proverom_kvaliteta(zahtev_za_proverom_kvaliteta_id);
 T   ALTER TABLE ONLY public.potrvda_o_kvalitetu DROP CONSTRAINT potrvda_o_kvalitetu_fk;
       public          postgres    false    233    3279    219            ?           2606    20378 *   stavka_racuna_kupca stavka_racuna_kupca_fk    FK CONSTRAINT     ?   ALTER TABLE ONLY public.stavka_racuna_kupca
    ADD CONSTRAINT stavka_racuna_kupca_fk FOREIGN KEY (racun_kupca_id) REFERENCES public.racun_kupca(racun_kupca_id);
 T   ALTER TABLE ONLY public.stavka_racuna_kupca DROP CONSTRAINT stavka_racuna_kupca_fk;
       public          postgres    false    223    240    3269            ?           2606    20311 ,   stavka_racuna_kupca stavka_racuna_kupca_fk_1    FK CONSTRAINT     ?   ALTER TABLE ONLY public.stavka_racuna_kupca
    ADD CONSTRAINT stavka_racuna_kupca_fk_1 FOREIGN KEY (proizvod_id) REFERENCES public.proizvod(proizvod_id);
 V   ALTER TABLE ONLY public.stavka_racuna_kupca DROP CONSTRAINT stavka_racuna_kupca_fk_1;
       public          postgres    false    240    3267    221            u   $   x?3??v?2????2?t?2?????t??????? Ca      w   ?   x?U?M?0????????3;9?+Y7???
$???;6?~o穃?^q???ӧ?	?6??????>?4 Ҩ?6???S??V[e?j?0xg?V?1r????n????c?6?????sEI?.{i?i=0???+?
????B??8R@5      ?   "   x?3??KT(J,I?2??O?JM????????? a??      y   4   x?3??OI??J??JU0?2C??q?#??,?xF\?H<c.C$?	W? ???      {   D   x?3?4202?5 !ΠĔ??lNS 4?2??L?M?̡2?@?1B3.K??	!?X eb???? ???      |   ?   x?Uα?0???? ?=????$ĥ?b`?????H s?4????E?3Z??z5t??????? I#2Hrq?9?.ƾ??G(01?b??wmCר??????#RH?#Μ7;uQ?G?????l????R??4??d??A?p5>X??Cj???
Lڃo}???z?)????h?I?      ~   Z   x?Eʻ?0@??y
 ??w????DA???"?t?%LW?U?w?ާ????D???(???d%??`a???(J?H??(??%R?J?c???l      ?   k   x?3??K,??M?KT0?4202?50"N0?2?@H?d?tuM9???ܐ3%1!n??2???B6?͹̍?J?t%8?R?ӊS?¤?Q?A$?.????? ??*?      ?   y   x?̱
1E???W?Hބ?̔?+vb???A?~??=\??b??t}??"<Y1?S??ősƥ??Z?[?A'U#?2??q?};??ݏ?Q??̦T) ??g?Ӳ??a??Ơ&???? ???      ?   J   x?%??	?0??nV ?$wI?????<????:??}?M0?h?V8g?eW?g;&U??7,Jq?;Tx?$6"      ?   +   x?3?4?2???\f????@??e bY1z\\\ ??Q      ?   t   x?e???0D?P?
p??????B??W?d??1L?"U'5R!?ؤx?)???? n??]???fڎ?0B??eީ?E?J??@??{ɾ? ء?4?21>1T?n??Yg?????T=#X      ?   '   x?3??,P0?2?F\?`ژ?L?pY?iS?=... ??	?      ?      x?3?LL??̃?\1z\\\ 8Z      ?   ?   x?m?M
?0?דSx??I???y??܌%J?UI???q!?}???=???V??????	D?	A??T???|??%??@??0?+?缤oGkB??]6?Cl;bQ??I??e?5?k?;?gZ6???kc????T?????ݩq?} I8G2      ?   K   x?34?4202?5 !N?Ă??ԼDCNS?24?JBڈ??M???@??6?4A.CS??&@I??=... ?4     