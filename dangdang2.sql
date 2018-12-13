/*
Navicat MySQL Data Transfer

Source Server         : 1808-zlh2
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : dangdang

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-12-13 15:07:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `cart`
-- ----------------------------
DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` tinyint(1) NOT NULL,
  `url` varchar(900) NOT NULL,
  `title` varchar(200) NOT NULL,
  `price` varchar(30) NOT NULL,
  `time` datetime NOT NULL,
  `count` tinyint(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cart
-- ----------------------------
INSERT INTO `cart` VALUES ('58', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '33.11', '2018-12-13 10:21:39', '1');

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `s_id` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(300) NOT NULL,
  `price` double(4,2) unsigned NOT NULL,
  `urls` varchar(999) NOT NULL,
  PRIMARY KEY (`s_id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '活成自己想要的样子', '19.70', 'http://img3m5.ddimg.cn/31/33/25348585-1_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-2_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-4_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-3_u_3.jpg');
INSERT INTO `goods` VALUES ('2', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '15.60', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('3', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '11.20', 'http://img3m5.ddimg.cn/31/33/25348585-1_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-2_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-4_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-3_u_3.jpg');
INSERT INTO `goods` VALUES ('4', '活成自己想要的样子', '15.11', 'http://img3m5.ddimg.cn/31/33/25348585-1_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-2_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-4_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-3_u_3.jpg');
INSERT INTO `goods` VALUES ('5', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '10.99', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('6', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '9.99', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('7', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '2.15', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('8', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '11.99', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('9', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '14.58', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('10', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '23.66', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('11', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '99.99', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('12', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '11.11', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('13', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '22.00', 'http://img3m5.ddimg.cn/31/33/25348585-1_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-2_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-4_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-3_u_3.jpg');
INSERT INTO `goods` VALUES ('14', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '22.22', 'http://img3m5.ddimg.cn/31/33/25348585-1_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-2_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-4_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-3_u_3.jpg');
INSERT INTO `goods` VALUES ('15', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '33.33', 'http://img3m5.ddimg.cn/31/33/25348585-1_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-2_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-4_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-3_u_3.jpg');
INSERT INTO `goods` VALUES ('16', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '44.44', 'http://img3m5.ddimg.cn/31/33/25348585-1_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-2_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-4_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-3_u_3.jpg');
INSERT INTO `goods` VALUES ('17', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '55.55', 'http://img3m5.ddimg.cn/31/33/25348585-1_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-2_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-4_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-3_u_3.jpg');
INSERT INTO `goods` VALUES ('18', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '66.66', 'http://img3m5.ddimg.cn/31/33/25348585-1_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-2_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-4_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-3_u_3.jpg');
INSERT INTO `goods` VALUES ('19', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '77.77', 'http://img3m5.ddimg.cn/31/33/25348585-1_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-2_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-4_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-3_u_3.jpg');
INSERT INTO `goods` VALUES ('20', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '88.88', 'http://img3m5.ddimg.cn/31/33/25348585-1_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-2_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-4_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-3_u_3.jpg');
INSERT INTO `goods` VALUES ('21', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '99.99', 'http://img3m5.ddimg.cn/31/33/25348585-1_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-2_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-4_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-3_u_3.jpg');
INSERT INTO `goods` VALUES ('22', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '2.30', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('23', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '22.33', 'http://img3m5.ddimg.cn/31/33/25348585-1_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-2_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-4_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-3_u_3.jpg');
INSERT INTO `goods` VALUES ('24', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '33.00', 'http://img3m5.ddimg.cn/31/33/25348585-1_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-2_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-4_u_3.jpg,http://img3m5.ddimg.cn/31/33/25348585-3_u_3.jpg');
INSERT INTO `goods` VALUES ('25', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '44.55', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('26', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '55.66', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('27', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '66.77', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('28', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '7.55', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('29', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '88.99', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('30', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '99.11', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('31', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '11.22', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('32', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '22.33', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('33', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '33.44', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('34', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '22.33', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('35', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '55.66', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('36', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '66.77', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('37', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '77.88', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('38', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '88.99', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('39', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '99.10', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('40', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '33.33', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('41', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '22.33', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('42', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '99.99', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('43', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '99.99', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('44', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '22.22', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('45', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '11.44', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('46', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '11.66', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('47', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '66.66', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('48', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '88.88', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('49', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '22.88', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('50', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '11.55', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('51', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '9.99', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('52', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '99.99', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('53', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '11.99', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('54', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '11.33', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('55', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '44.99', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('56', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '77.44', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('57', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '55.66', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('58', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '33.11', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('59', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '44.22', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');
INSERT INTO `goods` VALUES ('60', '我就喜欢你不喜欢我（随书附赠古风表白卡与拒绝卡）', '55.99', 'http://img3m3.ddimg.cn/70/24/25352683-2_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-1_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-3_u_3.jpg,http://img3m3.ddimg.cn/70/24/25352683-4_u_3.jpg');

-- ----------------------------
-- Table structure for `user_info`
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `s_id` tinyint(1) unsigned NOT NULL AUTO_INCREMENT,
  `tel` varchar(200) NOT NULL,
  `password` varchar(40) NOT NULL,
  `time` datetime NOT NULL,
  PRIMARY KEY (`s_id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('49', '15442266559', '7c4a8d09ca3762af61e59520943dc26494f8941b', '2018-12-11 21:14:58');
INSERT INTO `user_info` VALUES ('50', '13565656555', '1411678a0b9e25ee2f7c8b2f7ac92b6a74b3f9c5', '2018-12-12 08:24:05');
INSERT INTO `user_info` VALUES ('51', '15988888888', '45742f138293b4960f3e7ce702aa5f907edd6df4', '2018-12-12 19:49:13');
INSERT INTO `user_info` VALUES ('52', '13616511481', '6b9db0a7b107287e8e83249930c9a8c9de29b9d9', '2018-12-13 10:11:03');
INSERT INTO `user_info` VALUES ('53', '15977777777', '43014880c6c967679b0398426d155217101c8367', '2018-12-13 10:12:47');
INSERT INTO `user_info` VALUES ('54', '15966666666', '11304054cce09294a62b639bfddc2f1ed14cc47d', '2018-12-13 10:13:26');
INSERT INTO `user_info` VALUES ('55', '15955555555', '4531d3e57511e110e7b726d74cc71ae6cdfcc205', '2018-12-13 10:14:29');
