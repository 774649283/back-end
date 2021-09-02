/*
 Navicat Premium Data Transfer

 Source Server         : 本地MySQL
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : test_user

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 02/09/2021 22:05:37
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) COLLATE utf8_bin DEFAULT NULL COMMENT 'user name',
  `dob` datetime DEFAULT NULL COMMENT 'date of birth',
  `address` varchar(64) COLLATE utf8_bin DEFAULT NULL COMMENT 'user address',
  `description` varchar(128) COLLATE utf8_bin DEFAULT NULL COMMENT 'user description',
  `created_at` datetime DEFAULT NULL COMMENT 'user created date',
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of users
-- ----------------------------
BEGIN;
INSERT INTO `users` VALUES (1, 'test', '2021-02-02 00:00:00', '上海市休息休息', '个人描述', '2021-09-02 13:56:18', '2021-09-02 13:59:18');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
