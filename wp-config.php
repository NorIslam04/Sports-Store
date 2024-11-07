<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'g[yUCL=yx>(sL5HgS@u3|JHG|/@CAOD?=XD~,]8z-58RS7T$3-=Rk!z(5.+@75;w' );
define( 'SECURE_AUTH_KEY',   ']9Dp^2%`&|3d]~=q(2<Xg@Qm+aLF c5 g)0VEg/`!mW[VD(i5<:d:/-2!e5.h}|y' );
define( 'LOGGED_IN_KEY',     'wQ7VLKrs$e]4b.agU~;]&7+=Kmjwu8{I)EdP*nH.rxr-3{;*eu*5Da.CqUzt%*_O' );
define( 'NONCE_KEY',         'f:kw_LqTP<w+]*_mZY$@7C|1jtn[o<B^-=S8NxJ nZ|3 [OKJItrC@zDAvL?&,Oa' );
define( 'AUTH_SALT',         'ty,1d)GHv+aUmu$7j=]1G$bg5Tv~)SYg<Joqy!>h+F&T^Ey *)ws^Dn?|7+8G)wD' );
define( 'SECURE_AUTH_SALT',  'YJlVI1O@x1P80g}@rdTo8iNgrkcbX@m]&$.S@]-M9XM*88aL_7Tqq![O(Zpq_!wV' );
define( 'LOGGED_IN_SALT',    'h:HHG;ThB#@zz.i]iSppZNt>/PX{i/o-]tJ@oq/F2@b]4mpC8Z}lytmq(l}Q,J?R' );
define( 'NONCE_SALT',        '^aYF?!?)`nVRa;VK$a#J%x%%U7oU+^:[8LO.o&6fQL ,wvS>g.-E_B& t&uXn&X6' );
define( 'WP_CACHE_KEY_SALT', '=YL{FRNx>4#Jy_jA]3m9|w $%gL}T d47)G*$6UpprXS!oJ@FTx7,w feM]o7oNz' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
